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
                this.set_name("legal_ad_outup");
                this.set_titletext("외부법률자문회신조회");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_legal_ad", this);
            obj._setContents("<ColumnInfo><Column id=\"legaladvLawAdvReqNo\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOpenWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqMgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvAdvTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvFactRela\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvQuesIssu\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvEtc\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReviDay\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepMgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepCont\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvEtcReqPoin\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqLyrid\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqRepdate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqFact\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqQues\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqReq\" type=\"STRING\" size=\"256\"/><Column id=\"advTit\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoLyrName\" type=\"STRING\" size=\"256\"/><Column id=\"reqMgr\" type=\"STRING\" size=\"256\"/><Column id=\"repMgr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_adv", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">선택</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"data\">예</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">아니요</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_view00", "absolute", "0.98%", "248", "98.05%", "265", null, null, this);
            obj.set_taborder("44");
            obj.style.set_background("lavenderblush");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "0.88%", "8", "98.24%", "50", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("cornflowerblue");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "26", "18", "182", "29", null, null, this);
            obj.set_taborder("1");
            obj.set_text("외부법률자문회신조회");
            obj.style.set_color("whitesmoke");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view01", "absolute", "0.98%", "63", "98.05%", "35", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("lavenderblush");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "1.56%", "68", "96.88%", "25", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "1.56%", "68", "12.79%", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_text("법률자문의뢰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_req_no", "absolute", "14.65%", "70", null, "21", "70.61%", null, this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "92.77%", "70", "5.08%", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lawsuit_search", "absolute", "29.69%", "70", "5.08%", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("검색");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "17", "121", "197", "19", null, null, this);
            obj.set_taborder("8");
            obj.set_text("외부법률자문 기본사항");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view02", "absolute", "0.98%", "138", "98.05%", "64", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("lavenderblush");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "1.76%", "146", "96.48%", "25", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "1.76%", "170", "96.48%", "25", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no01", "absolute", "1.76%", "146", "12.79%", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_text("법률자문구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no00", "absolute", "1.76%", "170", "12.79%", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("의뢰담당자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no02", "absolute", "33.59%", "146", "12.79%", "25", null, null, this);
            obj.set_taborder("14");
            obj.set_text("회신요청일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no03", "absolute", "33.59%", "170", "12.79%", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("의뢰일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no04", "absolute", "65.53%", "146", "12.79%", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_text("의뢰변호사명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no05", "absolute", "65.53%", "170", "12.79%", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("회신일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_adv_code", "absolute", "14.94%", "148", null, "21", "70.31%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("ds_adv");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");

            obj = new Edit("edt_req_mgr", "absolute", "14.94%", "172", null, "21", "70.31%", null, this);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_out_req_date", "absolute", "46.78%", "172", null, "21", "37.79%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("sta_01", "absolute", "18", "230", "197", "19", null, null, this);
            obj.set_taborder("24");
            obj.set_text("외부법률자문회신");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "1.76%", "255", "96.48%", "25", null, null, this);
            obj.set_taborder("26");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "1.76%", "279", "96.48%", "126", null, null, this);
            obj.set_taborder("27");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "1.76%", "404", "96.48%", "100", null, null, this);
            obj.set_taborder("28");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no09", "absolute", "65.53%", "255", "12.79%", "25", null, null, this);
            obj.set_taborder("32");
            obj.set_text("회신여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no10", "absolute", "1.76%", "255", "12.79%", "25", null, null, this);
            obj.set_taborder("33");
            obj.set_text("회신제목");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no11", "absolute", "1.76%", "279", "12.79%", "126", null, null, this);
            obj.set_taborder("34");
            obj.set_text("회신내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no12", "absolute", "1.76%", "404", "12.79%", "100", null, null, this);
            obj.set_taborder("35");
            obj.set_text("기타회신사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_out_open_wtr", "absolute", "78.71%", "257", null, "21", "5.86%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_value("N");
            obj.set_text("아니요");
            obj.set_readonly("true");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("ds_yn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_index("2");

            obj = new Edit("edt_out_rep_tit", "absolute", "14.94%", "257", null, "20", "38.38%", null, this);
            obj.set_taborder("40");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_out_rep_cont", "absolute", "14.94%", "282", null, "120", "2.83%", null, this);
            obj.set_taborder("41");
            obj.set_scrollbars("fixedvert");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_out_rep_poin", "absolute", "14.94%", "408", null, "92", "2.83%", null, this);
            obj.set_taborder("42");
            obj.set_scrollbars("fixedvert");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reply", "absolute", "100.78%", "216", "6.05%", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("의뢰정보");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_req_repdate", "absolute", "46.78%", "148", null, "21", "37.79%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");

            obj = new Calendar("cal_out_rep_date", "absolute", "78.71%", "172", null, "21", "5.86%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("edt_req_lyr", "absolute", "78.91%", "148", null, "21", "6.35%", null, this);
            obj.set_taborder("47");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("legal_ad_outup");
            		p.set_titletext("외부법률자문회신조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_req_no","value","ds_legal_ad","legaladvLawAdvReqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","cmb_adv_code","value","ds_legal_ad","legaladvLawAdvCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_req_mgr","value","ds_legal_ad","reqMgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cal_out_req_date","value","ds_legal_ad","legaladvOutReqDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cmb_out_open_wtr","value","ds_legal_ad","legaladvOutRepWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_out_rep_tit","value","ds_legal_ad","legaladvOutRepTit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","txt_out_rep_cont","value","ds_legal_ad","legaladvOutRepCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","txt_out_rep_poin","value","ds_legal_ad","legaladvOutEtcRepPoin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cal_req_repdate","value","ds_legal_ad","legaladvOutReqRepdate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cal_out_rep_date","value","ds_legal_ad","legaladvOutRepDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_req_lyr","value","ds_legal_ad","legalOfficialinfoLyrName");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("legal_ad_outup.xfdl", "Lib::common.xjs");
        this.registerScript("legal_ad_outup.xfdl", function() {
        //include "Lib::common.xjs";

        
        this.legal_ad_outup_onload = function(obj,e)
        {
        	this.gf_codeComListLoad("dsComCode",  "ds_adv",   "N", "", "", "fnCallback", "O01"); // 공통코드(법률자문)조회
        }

        
        this.btn_lawsuit_search_onclick = function(obj,e)
        {
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("Search01"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "legal_ad::legal_ad_no.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        }

        

        //콜백함수
        this.fnCallback = function(sSvcId,nErrorCode,sErrorMsg)
        {
        	if(nErrorCode < 0)
        	{
        		this.alert(sSvcId + " : " + sErrorMsg);
        		return;
        	}
        	
        	switch (sSvcId)
        	{
        		case "selectLegalList":	// id 구분

        		break;
        	}
        }

        // 모달창 콜백
        this.modal_callback = function(strID,variant)
        {
        	if(strID == "Search01")
        	{
        		if(this.gfn_IsNull(variant))
        		{
        			return;
        		}
        		this.modal_selectlegal_ad(variant);
        	}
        }

        this.modal_selectlegal_ad = function(variant)
        {
        	var strSvcid 		= "selectLegalList";
        	var strController 	= "legal_ad/selectLegalAdDetail.do";
        	var strParam 		=  "legaladvLawAdvReqNo="+variant;

        	
        	
        	// 트랜잭션 공통함수 호출
        	this.gfn_transaction(this,
        					strSvcid,
        					strController, 
        					"",  
        					"ds_legal_ad=ds_output",
        					strParam, 
        					"fnCallback"
        					);
        }

        //초기화
        this.btn_reset_onclick = function(obj,e)
        {
        	this.reload();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.legal_ad_outup_onload, this);
            this.sta_title.addEventHandler("onclick", this.sta_title_onclick, this);
            this.sta_no.addEventHandler("onclick", this.sta_no_onclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_reset_onclick, this);
            this.btn_lawsuit_search.addEventHandler("onclick", this.btn_lawsuit_search_onclick, this);
            this.sta_03.addEventHandler("onclick", this.sta_03_onclick, this);
            this.sta_no01.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no00.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no02.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no03.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no04.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no05.addEventHandler("onclick", this.sta_no_onclick, this);
            this.edt_req_mgr.addEventHandler("oneditclick", this.edt_req_mgr_oneditclick, this);
            this.sta_01.addEventHandler("onclick", this.sta_03_onclick, this);
            this.sta_no09.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no10.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no11.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no12.addEventHandler("onclick", this.sta_no_onclick, this);
            this.btn_reply.addEventHandler("onclick", this.btn_reply_onclick, this);

        };

        this.loadIncludeScript("legal_ad_outup.xfdl");

       
    };
}
)();
