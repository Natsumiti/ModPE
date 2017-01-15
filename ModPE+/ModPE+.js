var ModPEObject = {};
ModPEObject.ModPE = ModPE;
ModPEObject.Level = Level;
ModPEObject.Player = Player;
ModPEObject.Entity = Entity;
ModPEObject.Item = Item;
ModPEObject.Block = Block;
ModPEObject.Server = Server;
ModPEObject.ChatColor = ChatColor;
ModPEObject.ItemCategory = ItemCategory;
ModPEObject.ParticleType = ParticleType;
ModPEObject.EntityType = EntityType;
ModPEObject.EntityRenderType = EntityRenderType;
ModPEObject.ArmorType = ArmorType;
ModPEObject.MobEffect = MobEffect;
ModPEObject.DimensionId = DimensionId;
ModPEObject.BlockFace = BlockFace;
ModPEObject.UseAnimation = UseAnimation;
ModPEObject.Enchantment = Enchantment;
ModPEObject.EnchantType = EnchantType;
ModPEObject.BlockRenderType = BlockRenderType;

var ModPEplus = {};
ModPEplus.AddonManager = {};

ModPEplus.AddonManager.AddonList = [];

function Mod(){return null;}
Object.defineProperty(Mod, "modid", {
	value : "every latter must be lower case. can use alphabet, number, and underscore",
	set : function(modid){
		var regexp = /[^a-z0-9_]*/g;
		if(regexp.test(modid)){
			
		}
	}
});