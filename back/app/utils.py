import json


def load_actions(filename: str) -> (dict, dict):
    codewords = dict()
    ids = dict()
    try:
        with open(filename, "r") as file:
            file = json.load(file)
            for action in file["actions"]:
                codeword = action["codeword"]
                id = action["id"]
                ids[codeword] = id
                codewords.setdefault(id, set()).add(codeword)
    except FileNotFoundError:
        print("File with this name probably does not exist or something in it is wrong")
    return codewords, ids


if __name__ == "__main__":
    # XXX: replace this with unitcode
    import os
    pth = os.path.join(os.path.dirname( __file__ ), '..', "actions.json")
    codewords, ids = load_actions(pth)
    print(codewords)
    print(ids)
    print(codewords["alert"])
    print(ids[5001])
