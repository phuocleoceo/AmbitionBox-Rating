import pandas as pd

df = pd.read_json("./db.json")
df.to_csv("./raw data.csv")
