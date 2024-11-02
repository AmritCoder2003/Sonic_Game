import k from "../kaplayCtx";

export function makeRing(pos) {
    return k.add([
        k.sprite("ring", { anim: "spin" }),
        k.area({ width: 64, height: 64 }),  
        k.scale(4),
        k.anchor("center"),
        k.pos(pos),
        k.offscreen(),
        "ring",
    ]);
}
