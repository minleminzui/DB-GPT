python run_query_rewrite.py --exp_id 2 --algo_conf ../query_rewrite/configs/instruction_induction.yaml --db_conf ../query_rewrite/configs/config.ini --train_data ./data/raw/train/rules.json --eval_data ./data/raw/execute/real.json --gen_sample 20 --gen_demo 16 --gen_prompt_per_sample 5 --gen_model text-davinci-003 --gen_max_tokens 200 --eval_sample 20 --eval_model text-davinci-003 --eval_max_tokens 1000