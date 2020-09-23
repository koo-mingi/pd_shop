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
                this.set_name("legal_ad_no");
                this.set_titletext("법률자문의뢰조회");
                this._setFormPosition(0,0,826,495);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"data\">회신</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">미회신</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_adv", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_legal_ad", this);
            obj._setContents("<ColumnInfo><Column id=\"legaladvLawAdvReqNo\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvAdvTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"reqMgr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_repl_comb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"name\">회신</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"name\">미회신</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_outadv_comb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"name\">외부자문</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"name\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("popupTitle", "absolute", "14", "7", "801", "50", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 12 Dotum");
            obj.set_text("  법률자문의뢰 조회");
            obj.set_imagealign("center middle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view02", "absolute", "14", "65", "799", "60", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "21", "71", "786", "25", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "21", "95", "786", "25", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no01", "absolute", "21", "71", "105", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("의뢰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no00", "absolute", "21", "95", "105", "25", null, null, this);
            obj.set_taborder("14");
            obj.set_text("법률자문구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no02", "absolute", "267", "95", "105", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("의뢰일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no03", "absolute", "267", "71", "105", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_text("의뢰부서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no04", "absolute", "518", "71", "105", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("회신여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_req_date_1", "absolute", "378", "98", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_type("normal");

            obj = new Calendar("cal_req_date_2", "absolute", "527", "98", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_type("normal");

            obj = new Static("Static00", "absolute", "62.23%", "95", null, "25", "35.71%", null, this);
            obj.set_taborder("18");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "745", "96", "55", "23", null, null, this);
            obj.set_taborder("8");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "684", "96", "55", "23", null, null, this);
            obj.set_taborder("7");
            obj.set_text("검색");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_req_no", "absolute", "130", "74", "130", "19", null, null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_law_adv_code", "absolute", "130", "98", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_datacolumn("codenm");
            obj.set_innerdataset("@ds_adv");
            obj.set_codecolumn("codeno");
            obj.set_index("-1");

            obj = new Combo("cmb_dept_cd", "absolute", "378", "74", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");

            obj = new Radio("rdo_adv_req_wrt", "absolute", "626", "74", "187", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_direction("vertical");
            obj.set_innerdataset("@ds_yn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_rowcount("-1");
            obj.set_index("0");

            obj = new ImageViewer("img_view00", "absolute", "14", "165", "796", "281", null, null, this);
            obj.set_taborder("20");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_legal_ad", "absolute", "21", "171", "783", "269", null, null, this);
            obj.set_taborder("21");
            obj.set_scrollbars("fixedvert");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_binddataset("ds_legal_ad");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"80\"/><Column size=\"179\"/><Column size=\"36\"/><Column size=\"76\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"외뢰번호\"/><Cell col=\"1\" text=\"자문구분\"/><Cell col=\"2\" text=\"외뢰제목\"/><Cell col=\"3\" text=\"회신\"/><Cell col=\"4\" text=\"의뢰부서\"/><Cell col=\"5\" text=\"의뢰일자\"/><Cell col=\"6\" text=\"외부자문\"/><Cell col=\"7\" text=\"의뢰담당자\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:legaladvLawAdvReqNo\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:legaladvLawAdvCode\" combodataset=\"ds_adv\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"2\" text=\"bind:legaladvAdvTit\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" style=\"color2: ;\" text=\"bind:legaladvRepWtr\" combodataset=\"ds_repl_comb\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:legaladvReqDeptCode\" combodataset=\"ds_dept\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"5\" edittype=\"mask\" text=\"bind:legaladvReqDate\" mask=\"####-##-##\"/><Cell col=\"6\" displaytype=\"combo\" style=\"color2: ;\" text=\"bind:legaladvOutReqWtr\" combodataset=\"ds_outadv_comb\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"7\" text=\"bind:reqMgr\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_page", "absolute", "51", "463", "573", "18", null, null, this);
            obj.set_taborder("24");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("stc_Prev", "absolute", "122", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("25");
            obj.set_text("이전");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_Next", "absolute", "492", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("26");
            obj.set_text("다음");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No0", "absolute", "162", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("27");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No1", "absolute", "194", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("28");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No2", "absolute", "226", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("29");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No3", "absolute", "258", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("30");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No4", "absolute", "290", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("31");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No5", "absolute", "322", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("32");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No6", "absolute", "354", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("33");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No7", "absolute", "386", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("34");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No8", "absolute", "418", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("35");
            obj.set_text("9");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No9", "absolute", "450", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("36");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);

            obj = new Button("btn_select", "absolute", "678", "454", "55", "23", null, null, this);
            obj.set_taborder("22");
            obj.set_text("확인");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close", "absolute", "744", "454", "55", "23", null, null, this);
            obj.set_taborder("23");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 18, this.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("24");
            		p.set_text("Div00");

            	}
            );
            this.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 826, 495, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("legal_ad_no");
            		p.set_titletext("법률자문의뢰조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("legal_ad_no.xfdl", "Lib::common.xjs");
        this.registerScript("legal_ad_no.xfdl", function() {
        // 10페이지 이상 목록이 있을 때 처리 되는지 페이징 처리 검증필요
        //include "Lib::common.xjs";

        this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        this.legaladvOutReqWtr	= 'Y';

        // 화면 로딩
        this.legal_ad_no_onload = function(obj,e)
        {
        	//this.gfnOnload(this);
        	var legaladvOutReqWtr = this.parent.legaladvOutReqWtr;
        	this.legaladvOutReqWtr = legaladvOutReqWtr;
        	
        	// 공통코드 로딩("O01" : 법률자문구분, "B01" : 의뢰부서)
        	this.gf_codeComListLoad("dsComCode1",  "ds_adv",   "Y", "", "전체", "fnCallback", "O01");
        	this.gf_codeComListLoad("dsComCode2",  "ds_dept",  "Y", "", "전체", "fnCallback", "S01");
        	
        	//this.cal_req_date_2.set_value(this.gfn_Today());
        	// 라디오버튼 첫번째에 선택돼있게
        	this.rdo_adv_req_wrt.set_index(0);
        	this.btn_search_onclick();

        }

        // 검색
        this.btn_search_onclick = function(obj,e)
        {
        	// 페이징 초기화 
        	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	
        	var strSvcid 		= "selectLegalList";
        	var strController 	= "legal_ad/selectLegalAdDetail.do";
        	var strParam 		=  "";
        	
        	// 각각의 검색조건 입력 시 컨트롤러로 넘겨줘야 할 변수들
        	if(!this.gfn_IsNull(this.gfn_Trim(this.edt_req_no.value))){
        	strParam +=   "legaladvLawAdvReqNo=" + this.gfn_Trim(this.edt_req_no.value);
        	}
        	if(!this.gfn_IsNull(this.cmb_dept_cd.value)){
        	strParam +=  " legaladvReqDeptCode=" + this.cmb_dept_cd.value;
        	}
        	if(!this.gfn_IsNull(this.cal_req_date_1.value)){
        	strParam +=  " legaladvReqDate1=" + this.cal_req_date_1.value;
        	}
        	if(!this.gfn_IsNull(this.cal_req_date_2.value)){
        	strParam +=  " legaladvReqDate2=" + this.cal_req_date_2.value;
        	}
        	if(!this.gfn_IsNull(this.rdo_adv_req_wrt.value)){
        	strParam +=  " legaladvRepWtr=" + this.rdo_adv_req_wrt.value;
        	}
        	if(!this.gfn_IsNull(this.cmb_law_adv_code.value)){
        	strParam +=  " legaladvLawAdvCode=" + this.cmb_law_adv_code.value;
        	}
        	
        	if(!this.gfn_IsNull(this.legaladvOutReqWtr)){
        	strParam +=  " legaladvOutReqWtr=" +this.legaladvOutReqWtr;
        	}
        	
        	// 트랜젝션 공통함수 호출
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
        this.btn_clear_onclick = function(obj,e)
        {
        	//페이징 초기화 
        	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	this.fnReload();
        	//this.reload();
        }

        this.fnReload = function ()
        {
        	this.edt_req_no.set_value('');
        	this.cmb_dept_cd.set_index(0);
        	this.cmb_law_adv_code.set_index(0);
        	this.cal_req_date_1.set_value('');
        	this.cal_req_date_2.set_value('');
        	this.rdo_adv_req_wrt.set_index(0);
        	
        };

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
        		case "selectLegalList":
        				var iLastRow = this.fv_iStartPageNo * this.fv_iUnitSelRowNo;
        				// filter():  데이터셋에서 조건식을 만족하는 row만 보이게 함
        				this.ds_legal_ad.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        				// 검색 결과가 없는 경우
        				if (this.ds_legal_ad.getRowCount() == 0)
        				{
        					//alert("더이상 조회할 자료가 없습니다.");
        					this.ds_legal_ad.filter("");
        					return;
        				}
        				else
        				{
        					this.fv_iServerRowCount = this.ds_legal_ad.getRowCount();
        					this.fn_SetStyle();
        					this.fn_SetPageNo();
        					//1페이지 스타일(블랙, 클릭돼있게)
        					this.div_page.stc_No0.style.set_color("black");
        					this.div_page_stc_No_onclick(this.div_page.stc_No0,"");
        				} 
        		break;
        		
        		case "dsComCode1" :
        			this.cmb_law_adv_code.set_index(0);
        		break;
        		
        		case "dsComCode2" :
        			this.cmb_dept_cd.set_index(0);
        		break;
        	}
        }

        
        //닫기
        this.btn_Close_onclick = function(obj,e)
        {
        	this.close();
        }

        
        //셀 더블클릭(확인기능)
        this.grd_legal_ad_oncelldblclick = function(obj,e)
        {
        	this.btn_select_onclick();
        }

        // 확인버튼
        this.btn_select_onclick = function(obj,e)
        {
        	var v_RtnVal = this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition,"legaladvLawAdvReqNo");
        	this.close(v_RtnVal);
        }

        

        

        

        

        

        
        // 중요!!! 확실히 이해하고 넘어가야 함
        //페이징처리 부분-----------------------------------------------------------------------------------------------------------------------------

        //-------------------------------------------------------------------------------------------------
        // 인덱스 클릭
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_No_onclick = function(obj,e)
        {
        	var iNo = new Number(obj.text);
        	var iFirstNum = (iNo-1) * this.fv_iMaxPageNum + 1;
        	var iLastNum = iFirstNum + this.fv_iMaxPageNum;
        	this.fn_SetStyle();
        	obj.style.set_color("black");
        	this.ds_legal_ad.filter("");
        	this.ds_legal_ad.filter("rownum >= " + iFirstNum+" && rownum < " + iLastNum);
        }

        //-------------------------------------------------------------------------------------------------
        // 이전 버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Prev_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo - 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("select", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // 다음버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Next_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo + 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("select", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // Page번호 Setting
        //-------------------------------------------------------------------------------------------------
        this.fn_SetPageNo = function()
        {
        	var sPage = this.fv_iStartPageNo * this.fv_iMaxPageNum;
        	
        	// 이전버튼 처리
        	if (this.fv_iStartPageNo < 1)
        	{
        		this.div_page.stc_Prev.set_visible(false);
        	} 
        	else 
        	{
        		this.div_page.stc_Prev.set_visible(true);
        	}

        	// 마지막 버튼 처리
        	if (this.fv_iServerRowCount < this.fv_iUnitSelRowNo)
        	{
        		this.div_page.stc_Next.set_visible(false);
        	}
        	else
        	{
        		this.div_page.stc_Next.set_visible(true);
        	}

        	// 인덱스 번호 처리
        	for (var i = 0; i < this.fv_iMaxPageNum; i++)
        	{
        		this.div_page.components["stc_No"+i].set_visible(true);
        		this.div_page.components["stc_No"+i].set_text(sPage+i+1);

        		if (this.fv_iServerRowCount < (i * this.fv_iMaxPageNum))
        		{
        			this.div_page.components["stc_No"+i].set_visible(false);			
        		} 
        		else 
        		{
        			this.div_page.components["stc_No"+i].set_visible(true);			
        		}
        	}	
        }
        //-------------------------------------------------------------------------------------------------
        // Style조정
        //-------------------------------------------------------------------------------------------------
        this.fn_SetStyle = function()
        {
        	for (var i = 0; i < this.fv_iMaxPageNum; i++)
        	{
        		this.div_page.components["stc_No"+i].style.set_color("gray");			
        	}	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.legal_ad_no_onload, this);
            this.sta_04.addEventHandler("onclick", this.sta_04_onclick, this);
            this.sta_no01.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no00.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no02.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no03.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no04.addEventHandler("onclick", this.sta_no_onclick, this);
            this.cal_req_date_1.addEventHandler("oneditclick", this.cal_req_date_1_oneditclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.cmb_law_adv_code.addEventHandler("onitemchanged", this.cmb_law_adv_code_onitemchanged, this);
            this.rdo_adv_req_wrt.addEventHandler("onitemclick", this.rdo_adv_req_wrt_onitemclick, this);
            this.grd_legal_ad.addEventHandler("oncelldblclick", this.grd_legal_ad_oncelldblclick, this);
            this.div_page.stc_Prev.addEventHandler("onclick", this.div_page_stc_Prev_onclick, this);
            this.div_page.stc_Next.addEventHandler("onclick", this.div_page_stc_Next_onclick, this);
            this.div_page.stc_No0.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No1.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No2.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No3.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No4.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No5.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No6.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No7.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No8.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No9.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.btn_select.addEventHandler("onclick", this.btn_select_onclick, this);
            this.btn_Close.addEventHandler("onclick", this.btn_Close_onclick, this);

        };

        this.loadIncludeScript("legal_ad_no.xfdl");

       
    };
}
)();
