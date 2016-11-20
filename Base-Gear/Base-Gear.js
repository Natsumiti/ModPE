var BASE_GEAR_VERSION = "0.01 beta";
var FileAPI = {
		mntdir: "/mnt",
		root: android.os.Environment.getExternalStorageDirectory()+"/",
		workdir: "games/com.mojang/basegear",
		moddir: "games/com.mojang/modlist",
		mkdir: function(a){
			(new java.io.File(this.root + a)).mkdirs();
		},
		mkworkdir: function(){
			this.mkdir(this.workdir);
			this.mkdir(this.moddir);
		},
		getFullPath: function(a){
			a = String(a);
			return a.startsWith(this.root) || a.startsWith(this.mntdir) ? a : this.root + a;
		},
		isExists: function(a){
			return (new java.io.File(this.getFullPath(a))).exists();
		},
		writeText: function(a, b, c){
			a = this.getFullPath(a);
			c = (new java.io.PrintWriter(new java.io.BufferedWriter(new java.io.FileWriter(a, c || !1))));
			c.write(b);
			c.close();
		},
		readText: function(a){
			a = this.getFullPath(a);
			try{
				var b = new java.io.BufferedReader(new java.io.FileReader(a)),
					c;
				for(a = ""; c = b.readLine();) a += c + "\n";
				return a;
			}catch(d){
				return null;
			}
		},
		readTextFromAsset: function(a){
			return (a = ModPE.getBytesFromTexturePack("assets/" + a)) ? new String(a) : null;
		}
	};
