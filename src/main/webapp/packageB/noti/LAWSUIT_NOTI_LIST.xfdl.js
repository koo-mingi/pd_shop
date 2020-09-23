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
                this.set_name("LAWSUIT_NOTI_LIST");
                this.set_titletext("소송고지관리");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_instanceType", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_court", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuitNoti", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitNotiAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiCaseNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiPlaName\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiPlaEtcNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDefName\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiDefEtcNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefJudgChg\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">전체</Col><Col id=\"value\">0</Col></Row><Row><Col id=\"id\">소송담당자</Col><Col id=\"value\">1</Col></Row><Row><Col id=\"id\">사건번호</Col><Col id=\"value\">2</Col></Row><Row><Col id=\"id\">원고명</Col><Col id=\"value\">3</Col></Row><Row><Col id=\"id\">피고명</Col><Col id=\"value\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_instanceType1", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeno\">대법원</Col><Col id=\"codenm\">002</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static08", "absolute", "14", "161", "996", "519", null, null, this);
            obj.set_taborder("27");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "14", "65", "996", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "70", "984", "25", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "94", "984", "25", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "20", "94", "115", "25", null, null, this);
            obj.set_taborder("7");
            obj.set_text("법원명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "430", "94", "105", "25", null, null, this);
            obj.set_taborder("9");
            obj.set_text("고지일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "692", "105", "16", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list_search00", "absolute", "883", "96", "55", "23", null, null, this);
            obj.set_taborder("13");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clean", "absolute", "943", "96", "55", "23", null, null, this);
            obj.set_taborder("14");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Search", "absolute", "20", "167", "984", "506", null, null, this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_lawsuitNoti");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"소송고지번호\"/><Cell col=\"2\" text=\"고지일자\"/><Cell col=\"3\" text=\"사건번호\"/><Cell col=\"4\" text=\"법원명\"/><Cell col=\"5\" text=\"소송관리번호\"/><Cell col=\"6\" text=\"원고명\"/><Cell col=\"7\" text=\"피고명\"/><Cell col=\"8\" text=\"최종심급\"/><Cell col=\"9\" text=\"총판결금액\"/><Cell col=\"10\" text=\"담당자명\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:lawsuitNotiAdmNo\"/><Cell col=\"2\" text=\"bind:lawsuitNotiDate\"/><Cell col=\"3\" text=\"bind:lawsuitNotiCaseNo\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:lawsuitNotiCortCode\" combodataset=\"ds_court\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"5\" text=\"bind:lawsuitAdmNo\"/><Cell col=\"6\" text=\"bind:lawsuitNotiPlaName\"/><Cell col=\"7\" text=\"bind:lawsuitNotiDefName\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:instAdmCode\" combodataset=\"ds_instanceType1\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:pladefJudgChg\"/><Cell col=\"10\" text=\"bind:insaName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("17");
            obj.set_text("  소송 고지 명세");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("search1", "absolute", "140", "73", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("id");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.set_value("0");
            obj.set_text("전체");
            obj.set_index("0");

            obj = new Edit("legal_input", "absolute", "285", "73", "140", "19", null, null, this);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.style.setStyleValue("background", "disabled", "#f7f7f7ff");
            obj.style.setStyleValue("color", "disabled", "#999999ff");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_search_court", "absolute", "140", "97", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_innerdataset("@ds_court");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");

            obj = new Calendar("cal_Noti_Date2", "absolute", "714", "97", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");

            obj = new Calendar("cal_Noti_Date1", "absolute", "540", "97", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");

            obj = new Static("Static03", "absolute", "14", "134", "996", "19", null, null, this);
            obj.set_taborder("25");
            obj.set_text("소송 고지 명세");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "955", "689", "55", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Work");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("소송고지관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","Static00","text","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","legal_input","value","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Static08","text","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LAWSUIT_NOTI_LIST.xfdl", "Lib::common.xjs");
        this.registerScript("LAWSUIT_NOTI_LIST.xfdl", function() {
        //include "Lib::common.xjs";

        //load
        this.LAWSUIT_NOTI_LIST_onload=function(obj,e){

        this.ds_lawsuitNoti.clearData();
        this.ds_court.clearData();
        this.ds_instanceType1.clearData();
        this.combo_search_court.set_value("");
        this.search1.set_value("0");
        this.legal_input.set_value("");
        this.cal_Noti_Date1.set_value("");
        this.cal_Noti_Date2.set_value("");

        this.gf_codeComListLoad("ds_court",  "ds_court",   "Y", "", "", "fnCallback", "A01");
        this.gf_codeComListLoad("ds_instanceType1",  "ds_instanceType1",  "Y", "", "", "fnCallback", "G01");

        
        this.btn_search_onclick();
        }

        this.fnCallback=function(strSvcId,nErrCode,strErrMessage)
        {
        	trace("err :" +nErrCode);
        	switch(strSvcId)
        	{	
        						
        		case "ds_court": 
        			this.ds_court.deleteRow(0);
        			break;	
        			case "lawsuitNotiStatement": 
        			if(nErrCode==0){
        			//trace("row " +this.ds_lawsuitNoti.saveXML());
        				if(this.ds_lawsuitNoti.getRowCount()<1) {
        				trace("없어");
        				alert("조회 내용이 없습니다.");
        				this.LAWSUIT_NOTI_LIST_onload();
        				}
        			}
        			else alert(strErrMessage);
        			break;	
        	}
        }

        //검색버튼
        this.btn_search_onclick = function(obj,e){
        if(this.cal_Noti_Date1.value > this.cal_Noti_Date2.value)
        	{
        		alert("뒤의 날짜가 더 작습니다..");
        		this.cal_Noti_Date1.value="";
        		this.cal_Noti_Date2.value="";
        		this.cal_Noti_Date1.setFocus();
        		return;	
        	}
        	else
        	{
        var strParam="";

        		(typeof this.search1.value== 'undefined') ? strParam += "" : strParam += "selectedId=" +"\"" +this.search1.value +"\""; 	
        	(typeof this.legal_input.value== 'undefined') ? strParam += "": (strParam += "selectedId1=" +"\""+this.legal_input.value+"\""); 
        			(typeof this.combo_search_court.value== 'undefined') ? strParam += "": (strParam += "selectedId2=" +"\""+this.combo_search_court.value+"\""); 
        		this.gfn_IsNull(this.cal_Noti_Date1.value) ? strParam += ""  : strParam += "selectedId3=" +"\""+this.cal_Noti_Date1.value+"\"";
         		this.gfn_IsNull(this.cal_Noti_Date2.value) ? strParam += ""  : strParam += "selectedId4=" +"\""+this.cal_Noti_Date2.value+"\"";
        		trace("strParam :: "+strParam);
        		this.gfn_transaction(this,"lawsuitNotiStatement","/noti/lawsuitNotiStatement.do", "", "ds_lawsuitNoti=ds_output", strParam, "fnCallback");
        	}
        }

        this.btn_reset_onclick = function(obj,e)
        {

        	this.LAWSUIT_NOTI_LIST_onload();
        }

        //엔터키
        this.edt_ID_OnKeyDown = function(obj,e)
        {
            if( e.keycode == 13 ){
               this.btn_search_onclick();
            }
        }
        this.combo_Clas_Code_onitemchanged = function(obj,e)
        {
        	if(this.search1.value=='전체') this.legal_input.enable(false);
        	else this.legal_input.set_enable(true);
        }

        //헤더정렬
        this.grd_Search_OnHeadClick=function(obj,e){

        	this.gfn_GridSort(this.grd_Search,this.ds_lawsuitNoti,e.col,13);
        }

        

        this.btn_zip_onclick = function(obj,e)
        {
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LAWSUIT_NOTI_LIST_onload, this);
            this.btn_list_search00.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_clean.addEventHandler("onclick", this.btn_reset_onclick, this);
            this.grd_Search.addEventHandler("onheadclick", this.grd_Search_OnHeadClick, this);
            this.search1.addEventHandler("onitemchanged", this.combo_Clas_Code_onitemchanged, this);
            this.legal_input.addEventHandler("onkeydown", this.edt_ID_OnKeyDown, this);
            this.legal_input.addEventHandler("oneditclick", this.legal_input_oneditclick, this);
            this.combo_search_court.addEventHandler("onitemchanged", this.combo_Clas_Code_onitemchanged, this);
            this.btn_close.addEventHandler("onclick", this.btn_zip_onclick, this);

        };

        this.loadIncludeScript("LAWSUIT_NOTI_LIST.xfdl");

       
    };
}
)();
