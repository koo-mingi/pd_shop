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
                this.set_name("POP_COURT_SEARCH");
                this.set_titletext("법원 조회");
                this._setFormPosition(0,0,284,96);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_court", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_titlebg", "absolute", "8", "8", "268", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("법원조회");
            obj.style.set_background("cornflowerblue");
            obj.style.set_color("white");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,12,bold");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_search_court", "absolute", "8", "63", "214", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_court");
            obj.set_codecolumn("codenm");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_index("-1");

            obj = new Button("btn_court_input", "absolute", "224", "63", "52", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 284, 96, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("POP_COURT_SEARCH");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("법원 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item9","cmb_search_court","value","ds_instance","instAdmCortCode");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POP_COURT_SEARCH.xfdl", "Lib::common.xjs");
        this.registerScript("POP_COURT_SEARCH.xfdl", function() {
        //include "Lib::common.xjs";

        this.POP_COURT_SEARCH_onload = function(obj,e)
        {
        	this.ds_court.clearData();

        	this.gf_codeComListLoad("searchCourt",  "ds_court",  "Y", "000", "선택", "transaction_callback", "A01"); //법원공통코드
        }

        this.transaction_callback = function(sSvcId,nErrorCode,sErrorMsg)
        {
        	
        	if(nErrorCode < 0)
        	{
        		this.alert(sSvcId + " : " + sErrorMsg);
        		return false;
        	}
        	switch(sSvcId){
        		case "searchCourt":
        			this.cmb_search_court.set_index(0);
        			break;
        		default:
        			break;
        	}
        }

        this.btn_court_input_onclick = function(obj,e)
        {
        	if(this.cmb_search_court.value==null || this.cmb_search_court.value==""){
        		flag="false";
        		alert("해당 법원을 선택하세요!!!");
        	}else{
        	var v_RtnVal = this.cmb_search_court.value;
        	}
        	this.close(v_RtnVal);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.POP_COURT_SEARCH_onload, this);
            this.cmb_search_court.addEventHandler("onitemchanged", this.cmb_search_court_onitemchanged, this);
            this.btn_court_input.addEventHandler("onclick", this.btn_court_input_onclick, this);

        };

        this.loadIncludeScript("POP_COURT_SEARCH.xfdl");

       
    };
}
)();
