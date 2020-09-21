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
                this.set_name("mainFrameNew");
                this.set_classname("mainFrameNew");
                this.set_titletext("New Form");
                this.set_tooltiptype("hover");
                this._setFormPosition(0,0,1280,819);
            }
            this.style.set_color("transparent");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00", "absolute", "80", "200", "1010", "559", null, null, this);
            obj.set_taborder("0");
            obj.set_image("URL('img::lawH.bmp')");
            obj.set_stretch("fixaspectratio");
            obj.style.set_border("0 none white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "102", "51", null, "117", "804", null, this);
            obj.set_taborder("1");
            obj.set_text("P");
            obj.style.set_color("yellowgreen");
            obj.style.set_font("italic 92 @HY견고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "266", "90", null, "62", "556", null, this);
            obj.set_taborder("3");
            obj.set_text("Law");
            obj.style.set_color("#646464ff");
            obj.style.set_font("italic 50 @HY견고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "184", "164", "265", "5", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("yellowgreen");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "146", "169", null, "22", "507", null, this);
            obj.set_taborder("5");
            obj.set_text("Judicial Affairs Management System");
            obj.style.set_color("#646464ff");
            obj.style.set_font("bold 12 휴먼모음T");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "174", "49", null, "117", "742", null, this);
            obj.set_taborder("6");
            obj.set_text("D");
            obj.style.set_color("yellowgreen");
            obj.style.set_align("left");
            obj.style.set_font("italic 82 @HY견고딕");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1280, 819, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("mainFrameNew");
            		p.set_titletext("New Form");
            		p.style.set_color("transparent");
            		p.set_tooltiptype("hover");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MainFrame.xfdl", "Lib::common.xjs");
        this.registerScript("MainFrame.xfdl", function() {
        /***********************************************************************************
        * SYSTEM      : 넥사크로플랫폼 PackageB
        * BUSINESS    : 넥사크로플랫폼 PackageB
        * FILE NAME   : MainFrame.xfdl
        * PROGRAMMER  : 
        * DATE        : 
        * DESCRIPTION : MainFrame
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *------------------------------------------------------------------
        * 
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
        * Common Library
        ***********************************************************************************/
        //include "Lib::common.xjs";

        
        /***********************************************************************************
        * Global/Local Variable
        ***********************************************************************************/

        
        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        /**
         * form onload 함수
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.MainFrame_onload = function(obj,e)
        {

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("MainFrame.xfdl");

       
    };
}
)();
