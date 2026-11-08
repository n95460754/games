import os
import random

# База данни с роли за неограничен брой AI агенти
ROLES = [
    ("Neural-Optimizer", "Оптимизира невронните мрежи на NPC ботовете."),
    ("Quantum-Compiler", "Компилира шейдъри и графични масиви."),
    ("Cloud-Architect", "Управлява облачните синхронизации на резултатите."),
    ("Cyber-Sentinel", "Пази мрежовия протокол от DDoS атаки."),
    ("Pixel-Artist", "Генерира процедурни текстури и спрайтове."),
    ("Sound-Synthesizer", "Синтезира динамични 8-bit аудио ефекти."),
    ("Logic-Engine", "Изчислява математиката на физичния двигател."),
    ("Economy-Balancer", "Балансира трудността и виртуалните награди."),
    ("Glitch-Destroyer", "Лови и унищожава memory leak грешки."),
    ("Hyper-Drive-CI", "Ускорява автоматичните билдове 10 пъти.")
]

def generate_infinite_bots(count=50):
    os.makedirs(".github/workflows", exist_ok=True)
    
    for i in range(1, count + 1):
        role_name, role_desc = random.choice(ROLES)
        bot_id = f"AI-Agent-{i:03d}-{role_name}"
        email = f"agent-{i:03d}@users.noreply.github.com"
        filename = f".github/workflows/autogen_bot_{i:03d}.yml"
        
        yaml_content = f"""name: {bot_id}

on:
  schedule:
    - cron: '{random.randint(0, 59)} * * * *'
  workflow_dispatch:

jobs:
  agent_task:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{{{ secrets.CEO_BOT_TOKEN }}}}
      - run: |
          git config user.name "{bot_id}"
          git config user.email "{email}"
          echo "## 🤖 {bot_id} Log ($(date -u))" >> AI_BOARD_ROOM.md
          echo "**Role:** {role_desc}" >> AI_BOARD_ROOM.md
          echo "**Status:** Автономната задача е изпълнена успешно!" >> AI_BOARD_ROOM.md
          echo "---" >> AI_BOARD_ROOM.md
          git add AI_BOARD_ROOM.md
          git commit -m "feat(agent-{i:03d}): execute automated swarm task" || exit 0
          git push origin main
"""
        with open(filename, "w", encoding="utf-8") as f:
            f.write(yaml_content)
            
    print(f"🚀 Успешно генерирани {count} нови AI работници в .github/workflows/")

if __name__ == "__main__":
    # Промени числото на колкото искаш (например 50, 100, 500)
    generate_infinite_bots(50)
