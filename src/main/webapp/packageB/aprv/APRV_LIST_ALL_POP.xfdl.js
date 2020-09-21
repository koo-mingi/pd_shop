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
                this.set_name("APRV_LIST_ALL_POP");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,650,647);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_approvalPrgr", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWrit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritTit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoFinWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCondCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoProcDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSabun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_aprv_step_code", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">001</Col><Col id=\"value\">소제기의뢰</Col></Row><Row><Col id=\"code\">002</Col><Col id=\"value\">소송접수</Col></Row><Row><Col id=\"code\">003</Col><Col id=\"value\">응소(제소)보고관리</Col></Row><Row><Col id=\"code\">004</Col><Col id=\"value\">조정안관리</Col></Row><Row><Col id=\"code\">005</Col><Col id=\"value\">재판외화해관리</Col></Row><Row><Col id=\"code\">006</Col><Col id=\"value\">판결보고</Col></Row><Row><Col id=\"code\">007</Col><Col id=\"value\">소송종결</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static25", "absolute", "20", "385", "604", "201", null, null, this);
            obj.set_taborder("47");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "19", "113", "605", "226", null, null, this);
            obj.set_taborder("46");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "608", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("  상세결재진행정보");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "14", "82", "100", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("  작성정보");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "38", "120", "578", "25", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "26", "120", "97", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_text("  결재대장번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pay_num", "absolute", "128", "122", "110", "21", null, null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "187", "228", "97", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("  결재일련번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pay_ser_num", "absolute", "339", "122", "49", "21", null, null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "393", "120", "97", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_text("  결재진행단계");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pay_pstage", "absolute", "495", "122", "115", "21", null, null, this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "38", "144", "578", "25", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "26", "144", "97", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("  작성일시");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "237", "144", "97", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("  작성자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_writer", "absolute", "339", "146", "120", "21", null, null, this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "38", "168", "578", "25", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "26", "168", "97", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_text("  제목");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sub", "absolute", "128", "170", "482", "21", null, null, this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "38", "192", "578", "140", null, null, this);
            obj.set_taborder("18");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "26", "192", "97", "140", null, null, this);
            obj.set_taborder("19");
            obj.set_text("  작성내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_con", "absolute", "128", "194", "482", "136", null, null, this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "237", "120", "97", "25", null, null, this);
            obj.set_taborder("21");
            obj.set_text("  결재일련번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "14", "354", "100", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("  결재정보");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "38", "392", "579", "25", null, null, this);
            obj.set_taborder("23");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "27", "392", "97", "25", null, null, this);
            obj.set_taborder("24");
            obj.set_text("  결재자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_payer", "absolute", "129", "394", "120", "21", null, null, this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "254", "392", "97", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text("  최종결재여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_final", "absolute", "356", "394", "74", "21", null, null, this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "435", "392", "97", "25", null, null, this);
            obj.set_taborder("28");
            obj.set_text("  결재상태");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_status", "absolute", "537", "394", "74", "21", null, null, this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "38", "416", "579", "25", null, null, this);
            obj.set_taborder("30");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "27", "416", "97", "25", null, null, this);
            obj.set_taborder("31");
            obj.set_text("  결재요청일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "225", "416", "97", "25", null, null, this);
            obj.set_taborder("33");
            obj.set_text("  결재처리일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "423", "416", "97", "25", null, null, this);
            obj.set_taborder("35");
            obj.set_text("  순번");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_seq", "absolute", "525", "418", "86", "21", null, null, this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_req", "absolute", "129", "418", "90", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("37");

            obj = new Calendar("cal_pro", "absolute", "327", "418", "90", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");

            obj = new Static("Static22", "absolute", "38", "440", "579", "140", null, null, this);
            obj.set_taborder("39");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cm", "absolute", "129", "442", "482", "136", null, null, this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "27", "440", "97", "140", null, null, this);
            obj.set_taborder("41");
            obj.set_text("  코멘트");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_write", "absolute", "128", "146", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("42");

            obj = new Button("Button00", "absolute", "571", "596", null, "24", "4.31%", null, this);
            obj.set_taborder("45");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #fefefeff 0,100 #ecece5ff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 650, 647, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item15","edt_pay_num","value","ds_approvalPrgr","aprvprgrInfoBookNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_pay_ser_num","value","ds_approvalPrgr","aprvprgrInfoSeq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_pay_pstage","value","ds_approvalPrgr","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_writer","value","ds_approvalPrgr","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_sub","value","ds_approvalPrgr","aprvprgrInfoWritTit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_con","value","ds_approvalPrgr","aprvprgrInfoWritCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_payer","value","ds_approvalPrgr","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_final","value","ds_approvalPrgr","aprvInfoFinWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_status","value","ds_approvalPrgr","aprvInfoCondCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_seq","value","ds_approvalPrgr","aprvInfoSeq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_cm","value","ds_approvalPrgr","aprvInfoCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cal_write","value","ds_approvalPrgr","aprvprgrInfoWritDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cal_pro","value","ds_approvalPrgr","aprvInfoProcDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","cal_req","value","ds_approvalPrgr","aprvInfoReqDate");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("APRV_LIST_ALL_POP.xfdl", "Lib::common.xjs");
        this.registerScript("APRV_LIST_ALL_POP.xfdl", function() {
        //include "Lib::common.xjs";

        //로딩시
        this.APRV_LIST_ALL_POP_onload=function(obj,e){

        	trace("pop");
        	var strSvcid = "approvalPrgrAll";
        	var strUrl = "/approval/approvalAllPOP.do";
        	var strParam =this.parent.data;
        		
        	this.gfn_transaction(this,strSvcid, strUrl, "","ds_approvalPrgr=ds_output", strParam, "fnCallback");

        }

        //callback
        this.fnCallback = function(sSvcId,nErrorCode,sErrorMsg){

        	if(sSvcId == "approvalPrgrAll"){
        	//trace(this.ds_approvalPrgr.saveXML());
        		this.edt_writer.set_value(this.ds_approvalPrgr.getColumn(0,"aprvprgrInfoWrit")+"("+this.ds_approvalPrgr.getColumn(0,"aprvprgrInfoWritSabun")+")");
        		this.edt_payer.set_value(this.ds_approvalPrgr.getColumn(0,"aprvInfoName")+"("+this.ds_approvalPrgr.getColumn(0,"aprvInfoSabun")+")");
        		if(this.ds_approvalPrgr.getColumn(0,"aprvprgrInfoStepCode")=="001") this.edt_pay_pstage.set_value("소제기의뢰");
        		else if(this.ds_approvalPrgr.getColumn(0,"aprvprgrInfoStepCode")=="002") this.edt_pay_pstage.set_value("소송접수");
        		else if(this.ds_approvalPrgr.getColumn(0,"aprvprgrInfoStepCode")=="003") this.edt_pay_pstage.set_value("응소(제소)보고관리");
        		else if(this.ds_approvalPrgr.getColumn(0,"aprvprgrInfoStepCode")=="004") this.edt_pay_pstage.set_value("조정안관리");
        		else if(this.ds_approvalPrgr.getColumn(0,"aprvprgrInfoStepCode")=="005") this.edt_pay_pstage.set_value("재판외화해보고");
        		else if(this.ds_approvalPrgr.getColumn(0,"aprvprgrInfoStepCode")=="006") this.edt_pay_pstage.set_value("판결보고");
        		else this.edt_pay_pstage.set_value("소송종결");
        		
        		if(this.ds_approvalPrgr.getColumn(0,"aprvInfoCondCode")=="Y") this.edt_status.set_value("완료");
        		else if(this.ds_approvalPrgr.getColumn(0,"aprvInfoCondCode")=="N") this.edt_status.set_value("미결");
        		else if(this.ds_approvalPrgr.getColumn(0,"aprvInfoCondCode")=="A") this.edt_status.set_value("전결");
        		else this.edt_status.set_value("반려");
        		
        	}	
        }	

        this.btn_close_OnClick = function(obj,e)
        {
        	this.close();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.APRV_LIST_ALL_POP_onload, this);
            this.edt_pay_ser_num.addEventHandler("oneditclick", this.edt_pay_ser_num_oneditclick, this);
            this.edt_con.addEventHandler("oneditclick", this.edt_con_oneditclick, this);
            this.Button00.addEventHandler("onclick", this.btn_close_OnClick, this);

        };

        this.loadIncludeScript("APRV_LIST_ALL_POP.xfdl");

       
    };
}
)();
