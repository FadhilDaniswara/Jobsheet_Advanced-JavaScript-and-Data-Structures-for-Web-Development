import pandas as pd
import re

file_path = "Survei Pengalaman dan Keamanan Transaksi di Facebook Marketplace (Responses)_cleaned.xlsx"
df = pd.read_excel(file_path)

# Filter valid
df_valid = df[(df.iloc[:, 1].str.contains('Ya', na=False, case=False)) & 
              (df.iloc[:, 2].str.contains('Ya', na=False, case=False))]

# Extract Column 18
keluhan_raw = df_valid.iloc[:, 18].dropna().tolist()

# Clean up empty or dash
keluhan_clean = [k for k in keluhan_raw if len(str(k).strip()) > 2 and str(k).strip() != '-']

# Let's print them out to categorize
for i, k in enumerate(keluhan_clean):
    print(f"{i+1}. {k}")