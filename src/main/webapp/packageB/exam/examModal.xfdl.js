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
                this.set_name("examModal");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,757,435);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_injuryDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"codename\" type=\"STRING\" size=\"256\"/><Column id=\"codename1\" type=\"STRING\" size=\"256\"/><Column id=\"higherCodeNo\" type=\"STRING\" size=\"256\"/><Column id=\"etcCode1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_01", "absolute", "14", "65", "730", "321", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "730", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  장해부위 찾기");
            obj.style.set_align("left middle");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2.77%", "72", "716", "307", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_injuryDetail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"527\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"장해부위\"/><Cell col=\"1\" text=\"장해분류내용\"/><Cell col=\"2\" text=\"지급률\"/></Band><Band id=\"body\"><Cell text=\"bind:codename\"/><Cell col=\"1\" text=\"bind:codename1\"/><Cell col=\"2\" text=\"bind:etcCode1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button_close", "absolute", "687", "394", "55", "23", null, null, this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_ok", "absolute", "626", "394", "55", "23", null, null, this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 757, 435, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("examModal.xfdl", "Lib::common.xjs");
        this.registerScript("examModal.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출

        	var injuryCode = "";
        	var injuryDetail = "";
        	var paymentRate = "";

        this.examModal = function(obj,e)
        {
        		//장해부위 내용 트랜잭션
        		this.gfn_transaction(this,
        			  "getInjuryList",
        			  "exam/getPopExamList.do",
        			  "",
        			  "ds_injuryDetail=ds_injuryDetail",
        			  "",
        			  "");

        }

        this.Div05_Button_close_onclick = function(obj,e)
        {
        	//trace(this.ds_injuryDetail.saveXML());
        	this.close();
        }

        this.Button_ok_onclick = function(obj,e)
        {
        	this.dataPass();
        }

        
        this.dataPass = function(){

        	var thisRow = this.ds_injuryDetail.rowposition;
        	injuryCode = this.ds_injuryDetail.getColumn(thisRow, "higherCodeNo");
        	injuryDetail = this.ds_injuryDetail.getColumn(thisRow, "codename1");
        	paymentRate = this.ds_injuryDetail.getColumn(thisRow, "etcCode1");
        	
        	this.close(injuryCode + "," + injuryDetail + "," + paymentRate);
        }

        
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	this.dataPass();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.examModal, this);
            this.Grid00.addEventHandler("oncelldblclick", this.Grid00_oncelldblclick, this);
            this.Button_close.addEventHandler("onclick", this.Div05_Button_close_onclick, this);
            this.Button_ok.addEventHandler("onclick", this.Button_ok_onclick, this);

        };

        this.loadIncludeScript("examModal.xfdl");

       
    };
}
)();
