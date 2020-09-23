(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("out_legal_ad_main");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Plugin("Plugin00", "absolute", "0%", "0", null, "715", "0%", null, this);
            obj.setProperty("taborder", "0");
            obj.setProperty("classid", "{8856F961-340A-11D0-A96B-00C04FD705A2}");
            obj.setProperty("popupstyle", "true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("out_legal_ad_main");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("out_legal_ad_main.xfdl", function() {

        this.out_legal_ad_main_onload = function(obj,e)
        {
        	//this.Plugin00.callMethod("Navigate2","http://www.naver.com");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.out_legal_ad_main_onload, this);

        };

        this.loadIncludeScript("out_legal_ad_main.xfdl");

       
    };
}
)();
