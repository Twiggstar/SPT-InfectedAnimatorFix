
(function () {
    console.log("[InfectedFix] Client script loaded, patching animator...");
    const origLateUpdate = EFT.Player.prototype.ComplexLateUpdate;
    EFT.Player.prototype.ComplexLateUpdate = function(deltaTime) {
        if (this?.ItemInHandsAnimator && !this.ItemInHandsAnimator.gameObject.activeSelf)
        {
            this.ItemInHandsAnimator.gameObject.SetActive(true);
            console.log("[InfectedFix] Animator was inactive and got reactivated.");
        }
        return origLateUpdate.call(this, deltaTime);
    };
})();
