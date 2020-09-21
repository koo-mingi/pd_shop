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
                this.set_name("aprv_comment_cont");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,600,540);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_aprvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfoname1\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfodeptname1\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfocont1\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfoname2\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfodeptname2\" type=\"STRING\" size=\"256\"/><Column id=\"aprvinfocont2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_00", "absolute", "14", "392", "572", "112", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_02", "absolute", "14", "245", "572", "112", null, null, this);
            obj.set_taborder("19");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_01", "absolute", "14", "98", "572", "112", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "572", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  결제자 의견");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "104", "560", "100", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "104", "105", "100", null, null, this);
            obj.set_taborder("2");
            obj.set_text("1차 결제자 의견");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "251", "560", "100", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "251", "105", "100", null, null, this);
            obj.set_taborder("4");
            obj.set_text("2차 결제자 의견");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "20", "398", "560", "100", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "398", "105", "100", null, null, this);
            obj.set_taborder("6");
            obj.set_text("3차 결제자 의견");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_close", "absolute", "531", "515", "55", "23", null, null, this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "14", "217", "146", "25", null, null, this);
            obj.set_taborder("11");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "14", "364", "146", "25", null, null, this);
            obj.set_taborder("12");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "14", "70", "146", "25", null, null, this);
            obj.set_taborder("13");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new TextArea("Edit_depuName01", "absolute", "126", "106", "450", "96", null, null, this);
            obj.set_taborder("14");
            obj.style.set_padding("0 3 0 3");
            obj.style.set_background("#f7f7f7ff");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.style.set_color("#999999ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("Edit_depuName00", "absolute", "126", "253", "450", "96", null, null, this);
            obj.set_taborder("15");
            obj.style.set_padding("0 3 0 3");
            obj.style.set_background("#f7f7f7ff");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.style.set_color("#999999ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("Edit_depuName02", "absolute", "126", "400", "450", "96", null, null, this);
            obj.set_taborder("16");
            obj.style.set_padding("0 3 0 3");
            obj.style.set_background("#f7f7f7ff");
            obj.style.set_border("1 solid #d5d5d5ff");
            obj.style.set_color("#999999ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 572, 50, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("  결제자 의견");
            		p.style.set_align("left");
            		p.style.set_background("#3366ffff");
            		p.style.set_color("#ffffffff");
            		p.style.set_font("bold 12 Dotum");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 600, 540, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Edit_depuName01","value","ds_aprvInfo","aprvinfocont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Edit_depuName00","value","ds_aprvInfo","aprvinfocont1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Edit_depuName02","value","ds_aprvInfo","aprvinfocont2");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("aprv_comment_cont.xfdl", "Lib::common.xjs");
        this.registerScript("aprv_comment_cont.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출

        this.aprv_comment_cont = function(obj,e)
        {
        	this.aprvComment();
        	
        	trace("!!!!모달성공!!!!");
        }

        
        this.aprvComment = function()
        {
        	this.ds_search.setColumn(0, "aprvprgrInfoStepCode", application.gds_aprverInfo.getColumn(0, "aprvprgrInfoStepCode"));
        	this.ds_search.setColumn(0, "aprvprgrInfoBookNo", application.gds_aprverInfo.getColumn(0, "aprvprgrInfoBookNo"));
        	this.ds_search.setColumn(0, "aprvprgrInfoSeq", application.gds_aprverInfo.getColumn(0, "aprvprgrInfoSeq"));
        	
        	//trace(this.ds_search.saveXML());
        	
        	this.gfn_transaction(this,
        		  "getAprvCommentInfo",
        		  "aprvListEmpl/getPayerInfo.do",
        		  "ds_search=ds_search",
        		  "ds_aprvInfo=ds_aprvInfo",
        		  "",
        		  "fn_callback");
        }

        
        this.fn_callback = function(svcId,errCd,errMsg)
        {
        trace("sfsfsf : "+this.ds_aprvInfo.saveXML());
        	if(svcId == "getAprvCommentInfo")
        	{
        		if(typeof(this.ds_aprvInfo.getColumn(0, "aprvinfodeptname")) != 'undefined')
        		{
        		trace("111");
        			this.Static11.set_text(this.ds_aprvInfo.getColumn(0, "aprvinfodeptname")+ " "+this.ds_aprvInfo.getColumn(0, "aprvinfoname"));
        		}
        		if(typeof(this.ds_aprvInfo.getColumn(0, "aprvinfodeptname1")) != 'undefined')
        		{
        			this.Static22.set_text(this.ds_aprvInfo.getColumn(0, "aprvinfodeptname1")+ " "+this.ds_aprvInfo.getColumn(0, "aprvinfoname1"));
        		}
        		if(typeof(this.ds_aprvInfo.getColumn(0, "aprvinfodeptname2")) != 'undefined')
        		{
        			this.Static33.set_text(this.ds_aprvInfo.getColumn(0, "aprvinfodeptname2")+ " "+this.ds_aprvInfo.getColumn(0, "aprvinfoname2"));
        		}
        	}
        }
        this.Button_close_onclick = function(obj,e)
        {
        	this.close(); 
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.aprv_comment_cont, this);
            this.Button_close.addEventHandler("onclick", this.Button_close_onclick, this);

        };

        this.loadIncludeScript("aprv_comment_cont.xfdl");

       
    };
}
)();
