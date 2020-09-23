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
                this.set_name("pop_depo_no");
                this.set_titletext("공탁관리번호 조회");
                this._setFormPosition(0,0,709,467);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_depo", this);
            obj._setContents("<ColumnInfo><Column id=\"rownum\" type=\"INT\" size=\"256\"/><Column id=\"depositDepoAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"depositJuriCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"depositJuriCortName\" type=\"STRING\" size=\"256\"/><Column id=\"depositForcExecSeq\" type=\"STRING\" size=\"256\"/><Column id=\"depositOthDepoName\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoName \" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoDate\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepuName\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoChg\" type=\"STRING\" size=\"256\"/><Column id=\"depositKeepDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"depositKeepDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoReleDate\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepchgCollDate\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoCollChg\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoCollRea\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"searchCondition\" type=\"STRING\" size=\"100\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_view00", "absolute", "14", "65", "681", "35", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "20", "70", "669", "25", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("#133678ff");
            this.addChild(obj.name, obj);

            obj = new Edit("search_depo", "absolute", "242", "73", "230", "19", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("10");
            obj.style.set_selectcolor("#333333ff");
            obj.style.set_selectbackground("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.style.set_padding("0 5 0 5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_depo_search", "absolute", "482", "71", "55", "23", null, null, this);
            obj.set_taborder("1");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_opacity("100");
            this.addChild(obj.name, obj);

            obj = new Static("subTitle_03", "absolute", "21", "117", "197", "19", null, null, this);
            obj.set_taborder("7");
            obj.set_text("공탁관리번호 목록");
            obj.style.set_color("black");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_depo", "absolute", "14", "137", "681", "269", null, null, this);
            obj.set_taborder("8");
            obj.set_scrollbars("fixedvert");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_binddataset("ds_depo");
            obj.style.set_border("2 solid #808080ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"107\"/><Column size=\"152\"/><Column size=\"172\"/><Column size=\"99\"/><Column size=\"129\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"align:center middle;font:bold 9 dotum;\" text=\"공탁관리번호\" combodisplayrowcount=\"5\"/><Cell col=\"1\" style=\"align:center middle;font:bold 9 dotum;\" text=\"공탁자명\" combodisplayrowcount=\"5\"/><Cell col=\"2\" style=\"align:center middle;font:bold 9 dotum;\" text=\"피공탁자명\" combodisplayrowcount=\"5\"/><Cell col=\"3\" style=\"align:center middle;font:bold 9 dotum;\" text=\"공탁일자\" editlimit=\"5\" combodisplayrowcount=\"5\"/><Cell col=\"4\" style=\"align:center middle;font:bold 9 dotum;\" text=\"공탁금액\" combodisplayrowcount=\"5\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center middle;font:9 dotum;\" text=\"bind:depositDepoAdmNo\" combodisplayrowcount=\"5\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center middle;font:9 dotum;\" text=\"bind:depositDepoName\" combodisplayrowcount=\"5\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center middle;font:9 dotum;\" text=\"bind:depositOthDepoName\" combodisplayrowcount=\"5\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center middle;font:9 dotum;\" text=\"bind:depositDepoDate\" mask=\"####-##-##\" combodisplayrowcount=\"5\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:center middle;font:0 dotum;\" text=\"bind:depositDepoChg\" mask=\"999,999,999원\" combodisplayrowcount=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select", "absolute", "571", "424", "55", "23", null, null, this);
            obj.set_taborder("9");
            obj.set_text("확인");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9 9");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close", "absolute", "630", "424", "55", "23", null, null, this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9 9");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "102", "72", "130", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">adm_no</Col><Col id=\"datacolumn\">공탁관리번호</Col></Row><Row><Col id=\"codecolumn\">forc_exec_seq</Col><Col id=\"datacolumn\">강제집행일련번호</Col></Row><Row><Col id=\"codecolumn\">depo_name</Col><Col id=\"datacolumn\">공탁자명</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("adm_no");
            obj.set_text("공탁관리번호");
            obj.set_index("0");

            obj = new Div("div_page", "absolute", "-5", "431", "573", "18", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("stc_Prev", "absolute", "98", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("25");
            obj.set_text("이전");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_Next", "absolute", "468", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("26");
            obj.set_text("다음");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No0", "absolute", "138", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("27");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No1", "absolute", "170", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("28");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No2", "absolute", "202", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("29");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No3", "absolute", "234", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("30");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No4", "absolute", "266", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("31");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No5", "absolute", "298", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("32");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No6", "absolute", "330", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("33");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No7", "absolute", "362", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("34");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No8", "absolute", "394", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("35");
            obj.set_text("9");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No9", "absolute", "426", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("36");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "26", "18", "168", "29", null, null, this);
            obj.set_taborder("14");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 굴림");
            obj.set_text("공탁관리번호 조회");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "680", "50", null, null, this);
            obj.set_taborder("15");
            obj.set_text("  공탁관리번호 조회");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 18, this.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.set_text("Div00");

            	}
            );
            this.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 709, 467, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pop_depo_no");
            		p.set_titletext("공탁관리번호 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("pop_depo.xfdl", "Lib::common.xjs");
        this.registerScript("pop_depo.xfdl", function() {

        //include "Lib::common.xjs";

        // 닫기 버튼
        this.btn_Close_onclick = function(obj,e)
        {
        	this.close();
        }

        // 모달창 오픈 시 모든 데이터 자동 검색
        this.pop_depo_no_onload = function(obj,e)
        {
        	this.gfnOnload(this);
        	this.btn_depo_search_onclick();
        }

        // 검색 버튼 (transaction 처리)
        this.btn_depo_search_onclick = function(obj,e)
        {
        	
        		//소송관리번호조회 버튼 클릭시 페이징 초기화 
        		this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        		this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        		this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        		this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        		this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)

        
        		this.ds_search.clearData();
        		var rowIdx = this.ds_search.addRow();
        		
        		var searchCondition = this.Combo00.value;
        		var searchKeyword = this.search_depo.value;
        		
        		this.ds_search.setColumn(0, "searchCondition", searchCondition);
        		this.ds_search.setColumn(0, "searchKeyword", searchKeyword);
        		
        			// 트랜젝션 공통함수 호출
        		this.gfn_transaction(this,
        						"selectDepoList",
        						"depo/Depo/selectDepoList.do", 
        						"ds_search=ds_search", 
        						"ds_depo=ds_output",
        						"", 
        						"transaction_callback"
        						);
        	

        }

        // 공탁관리번호 선택
        this.btn_select_onclick = function(obj,e)
        {

        	var v_RtnVal = this.ds_depo.getColumn(this.ds_depo.rowposition,  "depositDepoAdmNo");
        	this.close(v_RtnVal);
        	
        }

        // 더블클릭 시 데이터 전송
        this.grd_depo_oncelldblclick = function(obj,e)
        {
        	this.btn_select_onclick();
        }

        // 트랜잭션 콜백
        this.transaction_callback = function(sSvcId,nErrorCode,sErrorMsg)
        {
        	
        	if(nErrorCode < 0)
        	{
        		this.alert(sSvcId + " : " + sErrorMsg);
        		return;
        	}else{
        	
        		var iLastRow = this.fv_iStartPageNo * this.fv_iUnitSelRowNo;
        		this.ds_depo.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        		
        		if (this.ds_depo.getRowCount() == 0)
        		{
        			this.div_page.set_visible("false");
        			this.ds_depo.filter("");
        			this.alert("조회할 자료가 없습니다.");
        			return;
        				}
        		else
        		{
        			this.div_page.set_visible("true");
        			this.fv_iServerRowCount = this.ds_depo.getRowCount();
        			this.fn_SetStyle();
        			this.fn_SetPageNo();
        			this.div_page.stc_No0.style.set_color("gray");
        			this.div_page_stc_No_onclick(this.div_page.stc_No0,"");
        		}
        		
        	}
        }

        

        

        

        //////////////////// 페이징 처리

        //-------------------------------------------------------------------------------------------------
        // 인덱스 클릭
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_No_onclick = function(obj,e)
        {
        	var iNo = new Number(obj.text);
        	var iFirstNum = (iNo-1) * this.fv_iMaxPageNum + 1;
        	var iLastNum = iFirstNum + this.fv_iMaxPageNum;
        	this.fn_SetStyle();
        	obj.style.set_color("gray");
        	this.ds_depo.filter("");
        	this.ds_depo.filter("rownum >= " + iFirstNum+" && rownum < " + iLastNum);
        }

        //-------------------------------------------------------------------------------------------------
        // 이전 버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Prev_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo - 1;
        	// Transaction()코딩 할 부분
        	this.transaction_callback("selectDepoList", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // 다음버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Next_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo + 1;
        	// Transaction()코딩 할 부분
        	this.transaction_callback("selectDepoList", 0, "succ");
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
        		this.div_page.components["stc_No"+i].style.set_color("black");			
        	}	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.pop_depo_no_onload, this);
            this.btn_depo_search.addEventHandler("onclick", this.btn_depo_search_onclick, this);
            this.grd_depo.addEventHandler("oncelldblclick", this.grd_depo_oncelldblclick, this);
            this.btn_select.addEventHandler("onclick", this.btn_select_onclick, this);
            this.btn_Close.addEventHandler("onclick", this.btn_Close_onclick, this);
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

        };

        this.loadIncludeScript("pop_depo.xfdl");

       
    };
}
)();
