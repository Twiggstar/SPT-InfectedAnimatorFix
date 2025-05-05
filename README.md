# Infected Animator Fix – SPT-AKI Mod

Fixes stuttering and log spam when infected (Halloween event zombies) spawn in SPT-AKI. 
This issue is caused by their animator being inactive when animation states are reset, leading to error spam and FPS drops.

## ✅ Features

- Prevents `[Cant reset animator state: Game object with animator is inactive]` errors
- Fixes performance stutter when zombies spawn
- Light and clean implementation using SPT's ModLoader and dependency injection
- Works on **SPT-AKI 3.11.x** (based on EFT 0.14.1.0+)
- Logs when an animator is patched for easier debugging

## 📂 Installation

1. Extract the `User-InfectedAnimatorFix` folder into your SPT installation under `user/mods/`.
2. Launch the server and game as usual.

## 🧪 How It Works

- Injects a client script that overrides `EFT.Player.prototype.ComplexLateUpdate`.
- Reactivates the `ItemInHandsAnimator` object if inactive before animation calls.

## 📜 License

MIT — Fork, modify, share freely.
