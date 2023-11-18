import os
from huggingface_hub import hf_hub_download

hfkey = os.environ.get("HFKEY")
if not hfkey:
    raise ValueError("HFKEY environment variable is not set or is empty.")

model_id = "google/tapas-base-finetuned-wtq"
filenames = [
    "config.json", "pytorch_model.bin", "special_tokens_map.json",
    "tf_model.h5", "tokenizer_config.json", "tokenizer_config.json", "vocab.txt"
]

for filename in filenames:
    downloaded_model_path = hf_hub_download(
        repo_id=model_id,
        filename=filename,
        token=hfkey
    )
