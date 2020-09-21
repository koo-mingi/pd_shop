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
                this.set_name("unde_curr");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ty_code", this);
            obj._setContents("<ColumnInfo><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search_key", this);
            obj._setContents("<ColumnInfo><Column id=\"searchkey\" type=\"STRING\" size=\"256\"/><Column id=\"searchdatemin\" type=\"STRING\" size=\"256\"/><Column id=\"searchdatemax\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_stats", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitty\" type=\"STRING\" size=\"256\"/><Column id=\"judgcnt\" type=\"STRING\" size=\"256\"/><Column id=\"judgsum\" type=\"STRING\" size=\"256\"/><Column id=\"reconcilcnt\" type=\"STRING\" size=\"256\"/><Column id=\"reconcilsum\" type=\"STRING\" size=\"256\"/><Column id=\"mediationcnt\" type=\"STRING\" size=\"256\"/><Column id=\"mediationsum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_view01", "absolute", "14", "161", "996", "419", null, null, this);
            obj.set_taborder("36");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view00", "absolute", "14", "65", "996", "59", null, null, this);
            obj.set_taborder("33");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "94", "984", "25", null, null, this);
            obj.set_taborder("34");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "70", "984", "25", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset", "absolute", "943", "95", "55", "23", null, null, this);
            obj.set_taborder("14");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "883", "95", "55", "23", null, null, this);
            obj.set_taborder("15");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ty_code", "absolute", "140", "73", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_innerdataset("@ds_ty_code");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_index("-1");

            obj = new Static("Static02", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("20");
            obj.set_text("소송유형");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("11");
            obj.set_text("  소송 종결 현황");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "955", "588", "55", "23", null, null, this);
            obj.set_taborder("28");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_comdate1", "absolute", "140", "97", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.style.set_background("#f7f7f7ff");

            obj = new Calendar("cal_comdate2", "absolute", "310", "97", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.style.set_background("#f7f7f7ff");

            obj = new Static("Static05", "absolute", "290", "97", "10", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "20", "94", "115", "25", null, null, this);
            obj.set_taborder("21");
            obj.set_text("기준일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "14", "134", "996", "19", null, null, this);
            obj.set_taborder("35");
            obj.set_text("소송 종결 현황");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "20", "167", "983", "407", null, null, this);
            obj.set_taborder("27");
            obj.set_binddataset("ds_stats");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"156\"/><Column size=\"102\"/><Column size=\"104\"/><Column size=\"102\"/><Column size=\"104\"/><Column size=\"102\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" colspan=\"2\" text=\"판결\"/><Cell col=\"3\" colspan=\"2\" text=\"재판외화해\"/><Cell col=\"5\" colspan=\"2\" text=\"조정안\"/><Cell col=\"7\" colspan=\"2\" text=\"합계\"/><Cell row=\"1\" text=\"소송유형\"/><Cell row=\"1\" col=\"1\" text=\"건수\"/><Cell row=\"1\" col=\"2\" text=\"금액\"/><Cell row=\"1\" col=\"3\" text=\"건수\"/><Cell row=\"1\" col=\"4\" text=\"금액\"/><Cell row=\"1\" col=\"5\" text=\"건수\"/><Cell row=\"1\" col=\"6\" text=\"금액\"/><Cell row=\"1\" col=\"7\" text=\"건수\"/><Cell row=\"1\" col=\"8\" text=\"결정금액\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:lawsuitty\" combodataset=\"ds_ty_code\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"1\" text=\"bind:judgcnt\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:judgsum\" maskchar=\" \"/><Cell col=\"3\" text=\"bind:reconcilcnt\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:reconcilsum\"/><Cell col=\"5\" text=\"bind:mediationcnt\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:mediationsum\"/><Cell col=\"7\" expr=\"expr:parseInt(judgcnt)+parseInt(reconcilcnt)+parseInt(mediationcnt)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:parseInt(judgsum)+parseInt(reconcilsum)+parseInt(mediationsum)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","cal_comdate1","value","ds_lawsuitNoti","lawsuitNotiDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cal_comdate2","value","ds_lawsuitNoti","lawsuitNotiDate");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comp_lawsuit_curr.xfdl", "Lib::common.xjs");
        this.registerScript("comp_lawsuit_curr.xfdl", function() {

        //include "Lib::common.xjs";

        this.btn_reset_onclick = function(obj,e)
        {
        	this.cmb_ty_code.set_value("");
        	this.cal_comdate1.set_value("");
        	this.cal_comdate2.set_value("");
        	this.comp_lawsuit_curr_onload();
        }

        this.comp_lawsuit_curr_onload = function(obj,e)
        {

        	this.gf_codeComListLoad("lawsuit_ty_code", "ds_ty_code", "Y", "", "", "fnCallback", "A02");
        	
        	this.cmb_ty_code.index="0";
        	trace("index : "+this.cmb_ty_code.index);
        	this.btn_search_onclick();
        }

        this.btn_search_onclick = function(obj,e)
        {
        //  	if(this.Calendar00.value == ""|| this.Calendar01.value == "")
        //  	{
        //  		alert("입력되지않은 값이 있습니다.");
        //  		return;
        //  	}
        	if(this.cal_comdate1.value > this.cal_comdate2.value)
        	{
        		alert("뒤의 일자가 더 작습니다..");
        		this.cal_comdate1.value="";
        		this.cal_comdate2.value="";
        		this.cal_comdate2.setFocus();
        		return;	
        	}
        	else{
        this.ds_search_key.addRow();
        trace("검색 : "+this.cmb_ty_code.value);
        trace("검색 달력 :"+this.cal_comdate1.value);
        this.ds_search_key.setColumn(0,"searchkey",this.cmb_ty_code.value);
        this.ds_search_key.setColumn(0,"searchdatemin",this.cal_comdate1.value);
        this.ds_search_key.setColumn(0,"searchdatemax",this.cal_comdate2.value);
        	this.gfn_transaction(
        		this,
        		"getStatsDoneListSelect",
        		"/stats/getStatsDoneListSelect.do",
        		"ds_search_key=ds_search_key",
        		"ds_stats=ds_stats",
        		"",
        		"fnCallback"
        	);
        	}
        }

        this.fnCallback = function(id,errcode,errmsg)
        {
        	if(id == "lawsuit_ty_code"){
        	this.ds_ty_code.setColumn(0, "codenm", "전체");
        		this.ds_ty_code.setColumn(0, "codeno", "");
        // 		this.ds_ty_code.setColumn(this.ds_ty_code.rowcount-1, "codenm", "기타");
        // 		this.ds_ty_code.setColumn(this.ds_ty_code.rowcount-1, "codeno", "099");
        	}
        	
        	if(id == "getStatsDoneListSelect"){
        	if(errcode < 0){			
        			alert("데이터 불러오기에 실패하였습니다." + errmsg);
        		}
        	}
        }

        this.btn_zip_onclick = function(obj,e)
        {
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }

        // this.cmb_ty_code_onitemchanged = function(obj:Combo, e:nexacro.ItemChangeEventInfo)
        // {
        // 	this.ds_search_key.setColumn(0, 0, this.cmb_ty_code.value);
        // 	trace(this.ds_search_key.getColumn(0, 0));
        // }

        // this.cal_date01_onchanged = function()
        // {
        // 	var date01 = this.cal_date01.value;
        // 	this.ds_search_key.set_value(0, "searchdatemin", date01);
        // }
        // 
        // this.cal_date02_onchanged = function()
        // {
        // 	var date02 = this.cal_date02.value;
        // 	this.ds_search_key.set_value(0, "searchdatemax", date02);
        // }
        this.Static02_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.comp_lawsuit_curr_onload, this);
            this.btn_reset.addEventHandler("onclick", this.btn_reset_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.cmb_ty_code.addEventHandler("onitemchanged", this.cmb_ty_code_onitemchanged, this);
            this.btn_close.addEventHandler("onclick", this.btn_zip_onclick, this);

        };

        this.loadIncludeScript("comp_lawsuit_curr.xfdl");

       
    };
}
)();
