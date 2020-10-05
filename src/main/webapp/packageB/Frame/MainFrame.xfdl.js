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
                this.set_titletext("New Form");
                this.set_tooltiptype("hover");
                this._setFormPosition(0,0,1280,819);
            }
            this.style.set_color("transparent");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00", "absolute", "2", "1", "98.98%", "99.76%", null, null, this);
            obj.set_taborder("0");
            obj.set_image("URL('img::IMG_main.png')");
            obj.set_stretch("fixaspectratio");
            obj.style.set_border("0 none white");
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
