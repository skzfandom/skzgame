const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Physics,
		C3.Behaviors.Platform,
		C3.Plugins.TextBox,
		C3.Plugins.Spritefont2,
		C3.Plugins.Button,
		C3.Plugins.Audio,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Behaviors.solid,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Behaviors.Physics.Acts.SetWorldGravity,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.Button.Acts.Destroy,
		C3.Plugins.Spritefont2.Acts.Destroy,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.PlayAtPositionByName,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.System.Exps.windowwidth,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Plugins.Touch.Cnds.OnHoldGestureObject
	];
};
self.C3_JsPropNameTable = [
	{Физика: 0},
	{Item1: 0},
	{Платформер: 0},
	{Basket: 0},
	{spawner: 0},
	{Очки: 0},
	{ТекстурныйШрифт: 0},
	{Start: 0},
	{StartText: 0},
	{PressButton: 0},
	{HealthBar: 0},
	{Аудио: 0},
	{Тач: 0},
	{HealthScore: 0},
	{Bottom: 0},
	{GameOver: 0},
	{Restart: 0},
	{Mouse: 0},
	{Твёрдый: 0},
	{SprLeft: 0},
	{SprRight: 0},
	{Background: 0},
	{Health: 0},
	{GameStarted: 0},
	{EndX: 0},
	{HalfScreen: 0},
	{FallSpeed: 0},
	{StartX: 0},
	{GravityForse: 0},
	{Score: 0}
];

self.InstanceType = {
	Item1: class extends self.ISpriteInstance {},
	Basket: class extends self.ISpriteInstance {},
	spawner: class extends self.ISpriteInstance {},
	Очки: class extends self.ITextInputInstance {},
	ТекстурныйШрифт: class extends self.ISpriteFontInstance {},
	Start: class extends self.ISpriteInstance {},
	StartText: class extends self.ISpriteFontInstance {},
	PressButton: class extends self.IButtonInstance {},
	HealthBar: class extends self.ISpriteInstance {},
	Аудио: class extends self.IInstance {},
	Тач: class extends self.IInstance {},
	HealthScore: class extends self.ISpriteFontInstance {},
	Bottom: class extends self.ISpriteInstance {},
	GameOver: class extends self.ISpriteInstance {},
	Restart: class extends self.IButtonInstance {},
	Mouse: class extends self.IInstance {},
	SprLeft: class extends self.ISpriteInstance {},
	SprRight: class extends self.ISpriteInstance {},
	Background: class extends self.ISpriteInstance {}
}