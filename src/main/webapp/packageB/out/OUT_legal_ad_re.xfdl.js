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
                this.set_name("OUT_legal_ad_re");
                this.set_classname("OUT_legal_ad_re_skw");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cost", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"legaladvCostLawadvReqno\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvCostLawadvSeq\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvCostReqCost\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvCostStax\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvCostClamsumChg\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvCostRepCont\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_legal_ad", this);
            obj._setContents("<ColumnInfo><Column id=\"legaladvLawAdvReqNo\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepCont\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvEtcRepPoin\" type=\"STRING\" size=\"256\"/><Column id=\"repMgrName\" type=\"STRING\" size=\"256\"/><Column id=\"reqMgrName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cost_search", this);
            obj._setContents("<ColumnInfo><Column id=\"legaladvCostLawadvReqno\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search_legal_ad", this);
            obj._setContents("<ColumnInfo><Column id=\"legaladvLawAdvReqNo\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqLyrid\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1w11w</Col><Col id=\"Column1\">e3e</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_view03", "absolute", "14", "374", "993", "130", null, null, this);
            obj.set_taborder("34");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view02", "absolute", "14", "201", "994", "136", null, null, this);
            obj.set_taborder("31");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "43", "206", "958", "26", null, null, this);
            obj.set_taborder("33");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#444444ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view01", "absolute", "14", "127", "994", "35", null, null, this);
            obj.set_taborder("30");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view00", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("29");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "48", "281", "953", "50", null, null, this);
            obj.set_taborder("28");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#444444ff");
            this.addChild(obj.name, obj);

            obj = new Div("DivTitle", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  외부법률자문회신");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 굴림체");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "77", "70", "926", "25", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("#444444ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("의뢰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00", "absolute", "140", "73", "140", "19", null, null, this);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01", "absolute", "284", "72", "55", "23", null, null, this);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00", "absolute", "942", "72", "55", "23", null, null, this);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("subTitle_06", "absolute", "1.37%", "106", null, "15", "79.69%", null, this);
            obj.set_taborder("6");
            obj.set_text("  회신정보");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "43", "132", "958", "25", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("#444444ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "20", "132", "115", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_text("의뢰담당자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01", "absolute", "140", "135", "140", "19", null, null, this);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "346", "132", "115", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("의뢰일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00", "absolute", "467", "135", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_type("normal");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Static("subTitle_05", "absolute", "1.37%", "181", null, "15", "79.69%", null, this);
            obj.set_taborder("12");
            obj.set_text("  회신사항");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "48", "230", "953", "52", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_color("#444444ff");
            this.addChild(obj.name, obj);

            obj = new Static("wSta_09", "absolute", "20", "230", "115", "52", null, null, this);
            obj.set_taborder("15");
            obj.set_text("회신내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("wSta_10", "absolute", "20", "281", "115", "50", null, null, this);
            obj.set_taborder("16");
            obj.set_text("기타회신사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02_nosize", "absolute", "140", "209", "858", "19", null, null, this);
            obj.set_taborder("17");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "140", "233", "858", "46", null, null, this);
            obj.set_taborder("18");
            obj.style.set_padding("0 3 0 3");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_maxlength("255");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "140", "283", "857", "46", null, null, this);
            obj.set_taborder("19");
            obj.style.set_padding("0 3 0 3");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_maxlength("255");
            this.addChild(obj.name, obj);

            obj = new Static("subTitle_11", "absolute", "1.37%", "356", null, "15", "79.69%", null, this);
            obj.set_taborder("20");
            obj.set_text("  자문비내역");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02", "absolute", "892", "345", "55", "23", null, null, this);
            obj.set_taborder("21");
            obj.set_text("추가");
            obj.set_visible("false");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03", "absolute", "952", "345", "55", "23", null, null, this);
            obj.set_taborder("22");
            obj.set_text("삭제");
            obj.set_visible("false");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00", "absolute", "21", "381", "978", "117", null, null, this);
            obj.set_taborder("23");
            obj.set_binddataset("ds_cost");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"474\"/><Column size=\"111\"/><Column size=\"101\"/><Column size=\"115\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"회신내용\"/><Cell col=\"2\" text=\"자문수수료\"/><Cell col=\"3\" text=\"부가세\"/><Cell col=\"4\" text=\"청구합계금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:legaladvCostRepCont\" editlimit=\"4000\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:legaladvCostReqCost\" mask=\"###,###,###\" editlimitbymask=\"integer\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:legaladvCostStax\" mask=\"###,###,###\" editlimitbymask=\"integer\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:legaladvCostClamsumChg\" mask=\"#,###,###,###\" editlimitbymask=\"integer\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"총계\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;parseInt(legaladvCostClamsumChg)&quot;)\" mask=\"#,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_05", "absolute", "893", "518", "55", "23", null, null, this);
            obj.set_taborder("25");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "898", "173", "110", "23", null, null, this);
            obj.set_taborder("26");
            obj.set_text("자문의뢰 보기");
            obj.set_visible("false");
            obj.set_cssclass("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_06", "absolute", "953", "518", "55", "23", null, null, this);
            obj.set_taborder("27");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "20", "206", "115", "25", null, null, this);
            obj.set_taborder("14");
            obj.set_text("회신제목");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static20", "absolute", "43", "206", "37", "23", null, null, this);
            obj.set_taborder("35");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static00", "absolute", "43", "245", "37", "23", null, null, this);
            obj.set_taborder("36");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 996, 50, this.DivTitle,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("  외부법률자문회신");
            		p.style.set_align("left");
            		p.style.set_background("#3366ffff");
            		p.style.set_color("#ffffffff");
            		p.style.set_font("bold 12 굴림체");

            	}
            );
            this.DivTitle.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OUT_legal_ad_re_skw");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_00","value","ds_search_legal_ad","legaladvLawAdvReqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_01","value","ds_legal_ad","repMgrName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cal_00","value","ds_legal_ad","legaladvOutReqDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_02_nosize","value","ds_legal_ad","legaladvRepTit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","TextArea00","value","ds_legal_ad","legaladvRepCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","TextArea01","value","ds_legal_ad","legaladvEtcRepPoin");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OUT_legal_ad_re.xfdl", "Lib::common.xjs");
        this.registerScript("OUT_legal_ad_re.xfdl", function() {
        //include "Lib::common.xjs";

        var legaladvLawAdvReqNo = '';
        var legaladvOutReqLyrid = '';

        // dataset(gds_legalad)의 정보가 바뀔때마다 this.re_onload(); 되어야한다.
        // form 열였을때 로드하기
        this.re_onload = function(obj,e)
        {
        	//this.gfnOnload(this);
        	var rtnObj = this.gfnGetArgument();
        	legaladvLawAdvReqNo = rtnObj.legaladvLawAdvReqNo;
        	legaladvOutReqLyrid = rtnObj.legaladvOutReqLyrid;
        	
        	if(!this.gfn_IsNull(legaladvLawAdvReqNo))
        	{		
        		this.fnSearch();
        	}
        	
        	/*
        	if(legaladvNo != null)
        	{
        		this.ds_search_legal_ad.addRow();
        		this.ds_search_legal_ad.setColumn(this.ds_search_legal_ad.rowposition, "legaladvLawAdvReqNo", legaladvNo);
        		this.ds_search_legal_ad.setColumn(this.ds_search_legal_ad.rowposition, "legaladvOutReqLyrid", outlegalLyrid);
        		
        		trace("-------------"+this.ds_search_legal_ad.getRowCount());
        		trace("gds_legalad 의뢰번호 : ", this.ds_search_legal_ad.getColumn(this.ds_search_legal_ad.rowposition, "legaladvLawAdvReqNo"));
        		trace("gds_legalal 변호사번호 : ", this.ds_search_legal_ad.getColumn(this.ds_search_legal_ad.rowposition, "legaladvOutReqLyrid"));
        		
        		this.getOutLegalAdvInfo();
        		
        	}
        	else
        	{
        		trace("page load~~~~~normally");
        	}
        	*/
        }

        this.fnSearch = function ()
        {
        	trace("legaladvLawAdvReqNo(re) : "+legaladvLawAdvReqNo);
        	trace("legaladvOutReqLyrid(re) : "+legaladvOutReqLyrid);
        		
        	if(this.gfn_IsNull(legaladvOutReqLyrid))
        	{
        		legaladvOutReqLyrid = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        	}
        	
        	this.ds_search_legal_ad.setColumn(0,'legaladvLawAdvReqNo',legaladvLawAdvReqNo);
        	this.ds_search_legal_ad.setColumn(0,'legaladvOutReqLyrid',legaladvOutReqLyrid);
        	
        	this.btn_02.set_visible(true);
        	this.btn_03.set_visible(true);
        	this.getOutLegalAdvInfo();
        };

        //검색버튼
        this.search_onclick = function(obj,e)
        {
        	//this.reload();
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);	
        	var newChild = new ChildFrame;
        	
        	//모달팝업창 불러옴
        	newChild.init("Popup", "absolute", nLeft, nTop, 300, 250, null, null,
        					"out::OUT_legal_ad_out_no.xfdl");
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	newChild.showModal(this.getOwnerFrame(), "", this, "modal_callback");
        }

        //모달창 callback
        this.modal_callback = function(strID,variant)
        {
        	if(strID == "Popup")
        	{
        		
        		legaladvLawAdvReqNo = variant; //variant : modal창 닫힐때 반환값
        		
        		this.ds_cost.clearData();
        		
        		if(!this.gfn_IsNull(legaladvLawAdvReqNo))
        		{
        			this.fnSearch();
        		}
        		
        		/*
        		var x = legaladvLawAdvReqNo.length;
        		var lyrid = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        		
        		
        		trace("legaladvLawAdvReqNo : " + legaladvLawAdvReqNo);
        		trace("x : " + x);
        		trace("lyrid : " + lyrid);
        		
        		if(this.gfn_IsNull(legaladvLawAdvReqNo)) //법률자문의뢰번호 없을때
        		{
        			this.alert("기본사항이 없습니다.");
        			return false;
        		}
        		else if(!this.gfn_IsNull(legaladvLawAdvReqNo))
        		{	
        			this.ds_search_legal_ad.addRow();
        			this.ds_search_legal_ad.setColumn(this.ds_search_legal_ad.rowposition, "legaladvLawAdvReqNo", legaladvLawAdvReqNo);
        			this.ds_search_legal_ad.setColumn(this.ds_search_legal_ad.rowposition, "legaladvOutReqLyrid", lyrid);
        			this.getOutLegalAdvInfo();
        		}
        		*/
        	}
        }

        //법률자문 Info 조회
        this.getOutLegalAdvInfo = function()
        {
        	var strSvcid = "getOutLegalAdvInfo";
        	var strController = "/out/getOutLegalAdvInfo.do";
        	
        	this.gfn_transaction(this,
        						strSvcid, strController,
        						"ds_search=ds_search_legal_ad",
        						"ds_legal_ad=ds_output",
        						"",
        						"FnCallback");
        }

        //costInfo 조회
        this.getOutLegalCostInfo = function()
        {
        	var legaladvCostLawadvReqno = this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvLawAdvReqNo");
        	trace("legaladvCostLawadvReqno : "+legaladvCostLawadvReqno);
        	
        	this.ds_cost_search.setColumn(0, "legaladvCostLawadvReqno",legaladvCostLawadvReqno);
        	
        	var strSvcid = "getOutLegalAdvCostInfo";
        	var strController = "/out/getOutLegalAdvCostInfo.do";
        	
        	this.gfn_transaction(this,
        						strSvcid, strController,
        						"ds_search=ds_cost_search",
        						"ds_cost=ds_output",
        						"",
        						"FnCallback");
        }

        
        //callback 함수
        this.FnCallback = function(svcid,errcd,errmsg)
        {
        	if(errcd <0)
        	{
        		//alert("적절하지 않은 요청입니다.");
        		trace(svcid + "-" + errcd + "-" +errmsg);
        	}
        	else
        	{
        		switch(svcid)
        		{
        			case "getOutLegalAdvInfo":
        				/*
        				if(this.ds_legal_ad.getRowCount==0)
        				{
        					alert("자료가 없습니다.");
        				}
        				else
        				{
        					this.ds_search_legal_ad.clearData();
        					application.gds_legalad.clearData();
        					//alert("gds_legalad : "+application.gds_legalad.getRowCount());
        					//alert("조회완료");
        					this.btn_02.set_visible(true);
        					this.btn_03.set_visible(true);
        					this.getOutLegalCostInfo();
        				}*/
        				this.cal_00.set_value(this.gfn_Today());
        				this.getOutLegalCostInfo();
        				
        				break;
        			case "getOutLegalAdvCostInfo":
        				/*
        				if(this.ds_cost.rowcount==0)
        				{
        					alert("자문비내역이 없습니다.");
        				}
        				else
        				{
        					//alert("자문비내역 조회완료");
        				}
        				*/
        				break;
        			case "deleteCostInfo":
        				alert("자문비내역을 삭제하였습니다.");
        				this.getOutLegalCostInfo();
        				break;
        			case "saveCostInfo":
        				alert("자문의뢰회신을 저장하였습니다.");
        				alert("자문비내역을 저장하였습니다.");
        				this.fnSearch();
        				break;
        			case "saveCostInfo1":
        				alert("자문의뢰회신을 저장하였습니다.");
        				this.fnSearch();
        				break;
        			case "saveCostInfo2":
        				alert("자문비내역을 저장하였습니다.");
        				this.fnSearch();
        				break;
        		}
        	}
        }//end FnCallback

        //초기화 버튼
        this.Button01_onclick = function(obj,e)
        {
        	//this.reload();
        	this.ds_legal_ad.clearData();
        	this.ds_cost.clearData();
        	
        	this.btn_02.set_visible(false);
        	this.btn_03.set_visible(false);
        }

        
        //추가버튼
        this.Button02_onclick = function(obj,e)
        {
        	this.ds_cost.insertRow(0);
        	this.grd_00.setCellPos(1);
        	/*
        	this.ds_cost.addRow();
        	var legaladvCostLawadvReqno = this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvLawAdvReqNo");
        	this.ds_cost.setColumn(this.ds_cost.rowposition, "legaladvCostLawadvReqno", legaladvCostLawadvReqno);
        	alert("추가 후 저장버튼을 눌러야 저장됩니다.");
        	*/
        }

        //삭제버튼
        this.Button03_onclick = function(obj,e)
        {
        	var cRow = this.ds_cost.rowposition;
        	
        	if(this.ds_cost.rowcount == 0)	return	alert("삭제할 데이터가 없습니다.");
            
            if(this.ds_cost.getRowType(cRow) == Dataset.ROWTYPE_INSERT){
        		this.ds_cost.deleteRow(cRow);
            }else{
        		this.ds_cost.deleteRow(cRow);
        		this.costDel("deleteCostInfo");
        		//this.cud_transaction("deleteCostInfo");
            }
        	
        }

        this.fnValidation = function()
        {
        	var mCRow = this.ds_legal_ad.rowposition;
        	var rCnt  = this.ds_cost.rowcount;
        	
        	var outTit 	= this.ds_legal_ad.getColumn(mCRow,"legaladvRepTit");
        	var outCont = this.ds_legal_ad.getColumn(mCRow,"legaladvRepCont");
        	
        	if(this.gfn_IsNull(outTit))
        	{
        		alert("회신제목을 입력해주세요.");
        		this.edt_02_nosize.setFocus();
        		return false;
        	}
        	else if(this.gfn_IsNull(outCont))
        	{
        		alert("회신내용을 입력해주세요.");
        		this.TextArea00.setFocus();
        		return false;
        	}
        	else if(rCnt > 0)
        	{	
        		for(var i=0; i<rCnt; i++){
        			
        			var cost = this.ds_cost.getColumn(i, "legaladvCostReqCost");
        			var stax = this.ds_cost.getColumn(i, "legaladvCostStax");
        			var cont = this.ds_cost.getColumn(i, "legaladvCostRepCont");
        			
        			if(this.gfn_IsNull(cost)){
        				alert("자문수수료를 입력해주세요.");
        				return false;
        			}else if(this.gfn_IsNull(stax)){
        				alert("부가세를 입력해주세요.");
        				return false;
        			}else if(this.gfn_IsNull(cont)){
        				alert("자문비 회신내용을 입력해주세요.");
        				return false;
        			}
        		}
        	}
        		
        	return true;
        };

        //저장버튼
        this.Button05_onclick = function(obj,e)
        {
        	var no = this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvLawAdvReqNo");
        	
        	if(this.gfn_IsNull(no))						return alert("법률자문의뢰번호를 검색해주세요.");
        	
        	var rtnBol1 = this.gfnDsChangeCheck(this.ds_legal_ad);
        	var rtnBol2 = this.gfnDsChangeCheck(this.ds_cost);
        	
        	if(	!rtnBol1
        	&&	!rtnBol2)	return alert("저장할 데이터가 없습니다.");
        	if(!this.fnValidation())					return false;
        	
        	if(rtnBol1 && rtnBol2)	this.cud_transaction("saveCostInfo");
        	else if(rtnBol1)		this.cud_transaction("saveCostInfo1");
        	else if(rtnBol2)		this.cud_transaction("saveCostInfo2");
        	
        	/*
        	var yn = confirm("저장 하시겠습니까?");
        	
        	if(yn == true)
        	{
        		this.cud_transaction("saveCostInfo");
        	}
        	else
        	{
        		if(this.ds_cost.getRowCount() < 1)
        		{
        			alert("처리할 정보가 없습니다.");
        		}
        		else
        		{
        			return false;
        		}
        	}
        	*/
        };

        //삭제
        this.costDel = function(sSvcid)
        {
        	var legaladvLawAdvReqNo = this.ds_legal_ad.getColumn(0,"legaladvLawAdvReqNo");
        	
        	for(var i=0; i<this.ds_cost.rowcount; i++){
        		this.ds_cost.setColumn(i, "legaladvCostLawadvReqno", legaladvLawAdvReqNo);
        	}
        	
        	var strSvcid = sSvcid;
        	var strController = "/out/OutLegalCostDel.do";
        	
        	this.gfn_transaction(this,
        						strSvcid, strController,
        						"ds_cost=ds_cost:U",
        						"",
        						"",
        						"FnCallback");
        }

        //저장, 수정, 삭제 시 transaction method
        this.cud_transaction = function(sSvcid)
        {
        	var legaladvLawAdvReqNo = this.ds_legal_ad.getColumn(0,"legaladvLawAdvReqNo");
        	
        	for(var i=0; i<this.ds_cost.rowcount; i++){
        		this.ds_cost.setColumn(i, "legaladvCostLawadvReqno", legaladvLawAdvReqNo);
        		//?? this.ds_cost.setColumn(i, "legaladvCostLawadvSeq", costSeq);
        	}
        	
        	var strSvcid = sSvcid;
        	var strController = "/out/OutLegalCostListCud.do";
        	
        	this.gfn_transaction(this,
        						strSvcid, strController,
        						"ds_cost=ds_cost:U ds_outLegalAdv=ds_legal_ad:U",
        						"",
        						"",
        						"FnCallback");
        }

        //자문의뢰 보기 버튼((닫기/이동 2개 기능 동시에 작동이 안된다...)
        this.Button04_onclick = function(obj,e)
        {
        	//닫기
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        	
        	//이동
        	/*var oObj = {
                  ds    : application.gds_menu,   // 메뉴 dataset 
                  nRow  : 24,          // 선택된
                  oArgs : []              //넘길 argument
        		};
            
        	Iject.Mdi.call(this,oObj);
        	this.reload();*/
        }

        //닫기 버튼
        this.Button06_onclick = function(obj,e)
        {
        	this.gfnClose();
        }

        this.Grid00_onheadclick = function(obj,e)
        {
        	this.gfnGridHeadSort(obj.getBindDataset(), e.cell, false);
        }

        this.ds_cost_oncolumnchanged = function(obj,e)
        {
        	for(var i=0; i<obj.rowcount; i++){
        		var legaladvCostReqCost = nexacro.toNumber(obj.getColumn(i,'legaladvCostReqCost'));
        		var legaladvCostStax	= legaladvCostReqCost * 0.1;
        		
        		if(	this.gfn_IsNull(legaladvCostStax)
        		||	typeof legaladvCostStax != "number") 
        			legaladvCostStax 	= null;
        				
        		var legaladvCostClamsumChg =	this.gfnNVL(legaladvCostReqCost,0)
        									+	this.gfnNVL(legaladvCostStax,0);
        									
        		obj.setColumn(i,'legaladvCostStax',legaladvCostStax);							
        		obj.setColumn(i,'legaladvCostClamsumChg',legaladvCostClamsumChg);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_cost.addEventHandler("oncolumnchanged", this.ds_cost_oncolumnchanged, this);
            this.addEventHandler("onload", this.re_onload, this);
            this.btn_01.addEventHandler("onclick", this.search_onclick, this);
            this.btn_00.addEventHandler("onclick", this.Button01_onclick, this);
            this.btn_02.addEventHandler("onclick", this.Button02_onclick, this);
            this.btn_03.addEventHandler("onclick", this.Button03_onclick, this);
            this.grd_00.addEventHandler("onheadclick", this.Grid00_onheadclick, this);
            this.btn_05.addEventHandler("onclick", this.Button05_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.btn_06.addEventHandler("onclick", this.Button06_onclick, this);

        };

        this.loadIncludeScript("OUT_legal_ad_re.xfdl");

       
    };
}
)();
