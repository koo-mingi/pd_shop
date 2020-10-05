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
                this.set_name("PRODUCT_LIST");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_code_main", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"class_code\" type=\"STRING\" size=\"256\"/><Column id=\"code_no\" type=\"STRING\" size=\"256\"/><Column id=\"code_name\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_product_list", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code_main\" type=\"STRING\" size=\"256\"/><Column id=\"code_middle\" type=\"STRING\" size=\"256\"/><Column id=\"code_sub\" type=\"STRING\" size=\"256\"/><Column id=\"product_name\" type=\"STRING\" size=\"256\"/><Column id=\"product_stock\" type=\"STRING\" size=\"256\"/><Column id=\"product_price\" type=\"STRING\" size=\"256\"/><Column id=\"product_point\" type=\"STRING\" size=\"256\"/><Column id=\"product_option_enable\" type=\"STRING\" size=\"256\"/><Column id=\"product_sell_enable\" type=\"STRING\" size=\"256\"/><Column id=\"partner_name\" type=\"STRING\" size=\"256\"/><Column id=\"product_code\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"rownum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_middle", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"class_code\" type=\"STRING\" size=\"256\"/><Column id=\"code_no\" type=\"STRING\" size=\"256\"/><Column id=\"code_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code_sub", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"class_code\" type=\"STRING\" size=\"256\"/><Column id=\"code_no\" type=\"STRING\" size=\"256\"/><Column id=\"code_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("   상품 목록");
            obj.style.set_align("left");
            obj.style.set_background("coral");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "14", "65", "996", "82", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "20", "70", "984", "25", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "94", "984", "25", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "20", "118", "984", "25", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "70", "105", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_text("상품분류");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "94", "105", "25", null, null, this);
            obj.set_taborder("9");
            obj.set_text("상품명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "118", "105", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("판매처");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("list_com_main", "absolute", "133", "73", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_innerdataset("@ds_code_main");
            obj.set_codecolumn("code_no");
            obj.set_datacolumn("code_name");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.set_displaynulltext("대분류 전체");

            obj = new Combo("list_com_middle", "absolute", "269", "73", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("@ds_code_middle");
            obj.set_codecolumn("code_no");
            obj.set_datacolumn("code_name");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.set_displaynulltext("중분류 전체");

            obj = new Combo("list_com_sub", "absolute", "405", "73", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_innerdataset("@ds_code_sub");
            obj.set_codecolumn("code_no");
            obj.set_datacolumn("code_name");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.set_displaynulltext("소분류 전체");

            obj = new Button("btn_clean", "absolute", "912", "71", "84", "23", null, null, this);
            obj.set_taborder("14");
            obj.set_text("전체초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list_search00", "absolute", "912", "95", "84", "23", null, null, this);
            obj.set_taborder("15");
            obj.set_text("목록검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_product_name", "absolute", "132", "97", "404", "19", null, null, this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.style.setStyleValue("background", "disabled", "#f7f7f7ff");
            obj.style.setStyleValue("color", "disabled", "#999999ff");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_partner", "absolute", "132", "121", "404", "19", null, null, this);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.style.setStyleValue("background", "disabled", "#f7f7f7ff");
            obj.style.setStyleValue("color", "disabled", "#999999ff");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list_search01", "absolute", "541", "119", "55", "23", null, null, this);
            obj.set_taborder("18");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "617", "118", "105", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("판매유무");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_Wtr", "absolute", "730", "121", "203", "19", null, null, this);
            this.addChild(obj.name, obj);
            var radio_Wtr_innerdataset = new Dataset("radio_Wtr_innerdataset", this.radio_Wtr);
            radio_Wtr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">판매</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">판매중단</Col></Row></Rows>");
            obj.set_innerdataset(radio_Wtr_innerdataset);
            obj.set_taborder("20");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.style.set_color("black");
            obj.style.set_font("8 Dotum");
            obj.set_index("0");

            obj = new Static("Static08", "absolute", "14", "156", "996", "419", null, null, this);
            obj.set_taborder("22");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "22", "163", null, "19", "82.32%", null, this);
            obj.set_taborder("23");
            obj.set_text("상품 목록 현황");
            obj.style.set_font("bold 9 굴림체");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00", "absolute", "949", "17", "55", "31", null, null, this);
            obj.set_taborder("24");
            obj.style.set_background("URL('img::btn_WF_crudL2_N.png') stretch 9,9 left top");
            obj.style.set_border("0 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 11 Dotum");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_list", "absolute", "22", "183", "982", "385", null, null, this);
            obj.set_taborder("25");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_product_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"76\"/><Column size=\"77\"/><Column size=\"76\"/><Column size=\"204\"/><Column size=\"61\"/><Column size=\"113\"/><Column size=\"46\"/><Column size=\"70\"/><Column size=\"67\"/><Column size=\"148\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" edittype=\"text\" text=\"대분류\"/><Cell col=\"2\" text=\"중분류\"/><Cell col=\"3\" text=\"소분류\"/><Cell col=\"4\" text=\"상품명\"/><Cell col=\"5\" text=\"재고수량\"/><Cell col=\"6\" text=\"가격\"/><Cell col=\"7\" text=\"별점\"/><Cell col=\"8\" text=\"옵션여부\"/><Cell col=\"9\" text=\"판매여부\"/><Cell col=\"10\" text=\"판매처\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:chk\" expr=\"expr:chk=='Y'?'1':'0'\"/><Cell col=\"1\" text=\"bind:code_main\"/><Cell col=\"2\" text=\"bind:code_middle\"/><Cell col=\"3\" text=\"bind:code_sub\"/><Cell col=\"4\" text=\"bind:product_name\"/><Cell col=\"5\" text=\"bind:product_stock\"/><Cell col=\"6\" text=\"bind:product_price\"/><Cell col=\"7\" text=\"bind:product_point\"/><Cell col=\"8\" text=\"bind:product_option_enable\"/><Cell col=\"9\" text=\"bind:product_sell_enable\"/><Cell col=\"10\" text=\"bind:partner_name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list_add", "absolute", "885", "159", "55", "23", null, null, this);
            obj.set_taborder("26");
            obj.set_text("등록");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list_delete", "absolute", "941", "159", "55", "23", null, null, this);
            obj.set_taborder("27");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("div_page", "absolute", "151", "590", "657", "18", null, null, this);
            obj.set_taborder("28");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("stc_Prev", "absolute", "146", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("25");
            obj.set_text("이전");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_Next", "absolute", "516", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("26");
            obj.set_text("다음");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No0", "absolute", "186", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("27");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No1", "absolute", "218", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("28");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No2", "absolute", "250", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("29");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No3", "absolute", "282", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("30");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No4", "absolute", "314", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("31");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No5", "absolute", "346", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("32");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No6", "absolute", "378", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("33");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No7", "absolute", "410", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("34");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No8", "absolute", "442", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("35");
            obj.set_text("9");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No9", "absolute", "474", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("36");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 657, 18, this.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("28");
            		p.set_text("Div00");

            	}
            );
            this.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","edt_product_name","value","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_partner","value","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PRODUCT_LIST.xfdl", "Lib::common.xjs");
        this.addIncludeScript("PRODUCT_LIST.xfdl", "Lib::commonComp.xjs");
        this.registerScript("PRODUCT_LIST.xfdl", function() {

        /***********************************************************************************
        * Common Library
        ***********************************************************************************/
        //include "Lib::common.xjs";
        //include "Lib::commonComp.xjs"; // 메뉴 생성 및 닫기 메소드를 활용하기 위한 라이브러리.

        //목록 검색 시 페이징 초기화 
        this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        this.fv_iUnitSelRowNo   = 150; // 한번 Server호출시 가져올 row갯수
        this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        this.fv_iMaxAmount      = 15;  // 1 페이지당 보여줄 최대 row 수
        this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)

        /********************************************************************************
         * Desc		: 상품목록 화면 시작 시 초기화
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/

        this.PRODUCT_LIST_onload = function(obj,e)
        {    
        	this.comboSetup();
        	this.list_com.index="0";
            //this.getList();
        }

        /********************************************************************************
         * Desc		: 상태코드 데이터셋 초기화
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.comboSetup = function(){
        	this.gf_shopCodeComListLoad("ds_code_main",  "ds_code_main", "Y", "", "","fnCallback","P01",""); // 상품 대분류
        }

        /********************************************************************************
         * Desc		: 상품 중분류 코드 초기화함수
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.list_com_main_onitemchanged = function(obj,e)
        {
        	//this.alert(this.list_com_main.value);
        	
        	var mainValue = this.list_com_main.value;
        	if(mainValue != null)
        	{
        		this.gf_shopCodeComListLoad("ds_code_middle",  "ds_code_middle", "Y", "", "","fnCallback","P01",mainValue);
        	}
        }

        /********************************************************************************
         * Desc		: 상품 소분류 코드 초기화함수
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.list_com_middle_onitemchanged = function(obj,e)
        {
        	//this.alert(this.list_com_middle.value);
        	
        	var middleValue = this.list_com_middle.value;
        	if(middleValue != null)
        	{
        		this.gf_shopCodeComListLoad("ds_code_sub",  "ds_code_sub", "Y", "", "","fnCallback","P02",middleValue);
        	}
        }

        
        /********************************************************************************
         * Desc		: 트랜잭션 콜백함수
         * Param	: strId => 트랜잭션 id
         * Return	: 없음
         *******************************************************************************/
        this.fnCallback = function(strId,errcode,errmsg){

        	if(strId == "getProductDetailList"){
        		
        		/*
        		for(var i=0;i<this.ds_product_list.getRowCount();i++){
        			if(typeof (this.ds_product_list.getColumn(i,"insaName"))=='undefined') this.ds_raisreq.setColumn(i,"insaName"," ");
        			if(typeof (this.ds_product_list.getColumn(i,"raisreqReqId"))=='undefined') this.ds_raisreq.setColumn(i,"raisreqReqId","");
        		}
        		*/
        		if(errcode == 0){		
        			
        		    if(this.ds_product_list.getRowCount() < 1 ){
        		       alert( "조회 내용이 없습니다.");
        		       this.btn_clean_onclick();
        		    }else{
        				this.fn_pageSet();
        		    }
        		}else{
        		    alert("데이터 불러오기에 실패하였습니다." + errmsg);
        		}
        		
        	}
        	else if(strId=="ds_code_main"){
        		this.list_com_main.setColumn(0,"code_name","전체");
        		this.list_com_main.setColumn(0,"code_no","");
        	}
        	
        }

        /********************************************************************************
         * Desc		: 등록화면 열기 함수
         * Param	: strId => 트랜잭션 id
         * Return	: 없음
         *******************************************************************************/
        this.btn_list_add_onclick = function(obj,e)
        {
        	this.gfnClose();
        	this.gfnOpenMenu("product::PRODUCT_ADD",""); // 글로벌 변수 gnf_menu의 PAGE_URL(.xfdl은 지워서)
        	
        	/* gfnOpenMenu() 함수의 구조.
        	url = "rais::RAISREQ_LIST" + ".xfdl";
        	var mRow = application.gds_menu.findRow('PAGE_URL',url);
        	var sMenuid = application.gds_menu.getColumn(mRow, "MENU_ID");
        	this.alert(mRow);
        	
        	Iject.Mdi.newMdi(sMenuid,  mRow, "");|
        	*/
        }

        /********************************************************************************
         * Desc		: 화면 닫기 함수
         * Param	: strId => 트랜잭션 id
         * Return	: 없음
         *******************************************************************************/
        this.btn_close00_onclick = function(obj,e)
        {
        	this.gfnClose();
        }

        /********************************************************************************
         * Desc		: 목록 검색 버튼 함수
         * Param	: 
         * Return	: 없음
         *******************************************************************************/
        this.btn_search_onclick = function(obj,e)
        {
        	//데이터셋 필터 초기화
        	this.ds_product_list.filter(""); // 이거 안하면 페이징 처리 후 해당 페이지 내 데이터만 검색되는 오류발생...
        	// 상품목록요청
        	this.getList();								
        }

        /********************************************************************************
         * Desc		: 목록 검색 함수
         * Param	: 
         * Return	: 없음
         *******************************************************************************/
        this.getList = function(){
        	
            var main_code = this.list_com_main.value;
        	var middle_code = this.list_com_middle.value;
        	var sub_code = this.list_com_sub.value;
        	var product_name = this.edt_product_name.value;
        	var partner_name = this.edt_partner.value;
        	var sale_yn = this.radio_Wtr.value;
        	
        	this.alert("대분류 코드 : " + main_code
        			  + "\n중분류 코드 : " + middle_code
        			  + "\n소분류 코드 : " + sub_code
        			  + "\n판매유무 : " + sale_yn
        			  + "\n상품명 : " + product_name);
            
            /* 널값 체크 */
        	if(main_code == null || main_code == 'undifined') main_code = "";
        	if(middle_code == null || middle_code == 'undifined') middle_code = "";
        	if(sub_code == null || sub_code == 'undifined') sub_code = "";
        	if(product_name == null || product_name == 'undifined') product_name = "";
        	if(partner_name == null || partner_name == 'undifined') partner_name = "";
            
            
            var strSvcid        = "getProductDetailList"; // 상품목록
            var strController    = "/product/getProductDetailList.do";
            var strParam = "";
        		strParam += "product_code="+main_code + middle_code + sub_code;
        		strParam += " product_name="+product_name;  // 앞에 한 칸 띄워야 파라미터 구분 가능
        		strParam += " partner_name="+partner_name;
        		strParam += " product_sell_enable="+sale_yn;
          
            // alert(strParam);
            // 트랜젝션 공통함수 호출 // eclipse로 인자값들을 전달하는 부분
            this.gfn_transaction(this,
                            strSvcid,
                            strController,
                            "",
                            "ds_product_list=ds_output",
                            strParam,
                            "fnCallback"
                            );
           
        }

        
        /********************************************************************************
         * Desc		: 검색조건 초기화
         * Param	: 
         * Return	: 없음
         *******************************************************************************/
        this.btn_clean_onclick = function(obj,e)
        {
        	this.list_com_main.set_value(null);
        	this.list_com_middle.set_value(null);
        	this.ds_code_middle.clearData();
        	this.list_com_sub.set_value(null);
        	this.ds_code_sub.clearData();
        	this.edt_product_name.set_value("");
        	this.radio_Wtr.set_value("Y");
        	this.ds_product_list.clearData();
        	this.fn_pageSet();
        }

        /********************************************************************************
         * Desc		: 상품 목록 삭제
         * Param	: 
         * Return	: 없음
         *******************************************************************************/
        this.btn_list_delete_onclick = function(obj,e)
        {
        	// 삭제목록 담을 배열
        	var chkarr = new Array();
        	
        	// 전체 목록 개수
        	for(var nRow=0; nRow < this.ds_product_list.getRowCount(); nRow++) 
        	{ 
        		// 체크된 상품일 때, 배열에 상품코드를 담아줌
        		if(this.ds_product_list.getColumn(nRow,"chk") == 'Y')
        		{
        			chkarr[nRow] =  this.ds_product_list.getColumn(nRow,"product_code");
        		}		
        	}
        	// 배열에 담겼는지 확인
        	this.alert(chkarr);
        	
        	var strSvcid        = "deleteProduct"; // 상품목록삭제
            var strController   = "/product/deleteProduct.do";
            var strParam = chkarr;
            
            alert(strParam);
            // 트랜젝션 공통함수 호출 // eclipse로 인자값들을 전달하는 부분
            this.gfn_transaction(this,
                            strSvcid,
                            strController,
                            "",
                            "ds_product_list=ds_output",
                            strParam,
                            "fnCallback"
                            );
        	
        }

        /********************************************************************************
         * Desc		: 그리드 셀 더블 클릭
         * Param	: 
         * Return	: 없음
         *******************************************************************************/
        this.Grid_list_oncelldblclick = function(obj,e)
        {
        	
        }

        /********************************************************************************
         * Desc		: 체크박스 클릭 시 선택 또는 해제
         * Param	: 
         * Return	: 없음
         *******************************************************************************/
        this.ds_product_list_oncolumnchanged = function(obj,e) 
        { 
        	// chk 컬럼인 경우 
        	if(e.columnid == "chk") 
        	{ 
        		// 다른 이벤트가 동작하지 않도록 설정 
        		obj.enableevent = false; //false can stop event temporarily 
        		
        		// 변경된 값이 1(체크가 된 경우)인경우 
        		if(e.newvalue == '1') 
        		{ 
        			// 1인 경우 Dataset의 chk 값을 Y로 변경 
        			obj.setColumn(e.row,"chk",'Y'); 
        			
        			// 모든 체크박스가 선택되었을 경우 헤더 체크박스 체크
        			var totalCheck = 'Y';
        			for(var nRow=0; nRow < this.ds_product_list.getRowCount(); nRow++) 
        			{ 
        				if(this.ds_product_list.getColumn(nRow, "chk") == 'N')
        				{
        					totalCheck = 'N';
        					break;
        				}
        			}
        			if(totalCheck == 'Y') this.Grid_list.setCellProperty( "head", 0, "text", '1');
        			
        		} 
        		else if(e.newvalue == '0') 
        		{ 
        			// 변경된 값이 0인 경우 Dataset의 chk 값을 N로 변경 
        			obj.setColumn(e.row,"chk",'N'); 
        			this.Grid_list.setCellProperty( "head", 0, "text", '0');
        		} 
        		
        		// 다시 이벤트가 정상 동작하도록 설정 
        		obj.enableevent = true; 
        	}
        }

        

        /********************************************************************************
         * Desc		: 그리드 셀  원클릭(선택)
         * Param	: 
         * Return	: 없음
         *******************************************************************************/
        this.Grid_list_oncellclick = function(obj,e)
        {
        	//this.alert(e.cell);
        }

        /********************************************************************************
         * Desc		: 그리드 해드 원클릭(선택)
         * Param	: 
         * Return	: 없음
         *******************************************************************************/
        this.Grid_list_onheadclick = function(obj,e)
        {
        	// 첫 번째 컬럼인 경우(체크박스 전체 선택 또는 해제) 
        	if(e.cell == 0) 
        	{ 
        		var checkValue = this.Grid_list.getCellProperty("head",0,"text");
        		//this.alert(checkValue);
        		
        		if(checkValue == '1')
        		{	
        			this.Grid_list.setCellProperty( "head", 0, "text", '0');
        			// Dataset의 레코드 개수 만큼 반복 
        			for(var nRow=0; nRow < this.ds_product_list.getRowCount(); nRow++) 
        			{ 
        				// chk 컬럼의 값을 Y로 변경 
        				this.ds_product_list.setColumn(nRow, "chk", 'N'); 
        			}
        		}
        		else
        		{
        			this.Grid_list.setCellProperty( "head", 0, "text", '1');
        			// Dataset의 레코드 개수 만큼 반복 
        			for(var nRow=0; nRow < this.ds_product_list.getRowCount(); nRow++) 
        			{ 
        				// chk 컬럼의 값을 Y로 변경 
        				this.ds_product_list.setColumn(nRow, "chk", 'Y'); 
        			}
        		}
        	}

        }

        /************************************** 페이징 처리 관련 *******************************************/

        /********************************************************************************
         * Desc		: 페이징 관련 초기화 세팅 함수
         * Param	: 
         * Return	: 없음
         *******************************************************************************/
        this.fn_pageSet = function()
        {
        	this.div_page.set_visible("true");
        	this.fv_iServerRowCount = this.ds_product_list.getRowCount();
        	this.fn_SetStyle();
        	this.fn_SetPageNo();
        	this.div_page.stc_No0.style.set_color("gray");
        	this.div_page_stc_No_onclick(this.div_page.stc_No0,"");
        }

        
        //-------------------------------------------------------------------------------------------------
        // 인덱스 클릭
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_No_onclick = function(obj,e)
        {
        	// 이전 페이지의 체크박스 해제
        	//this.alert(this.ds_product_list.getRowCount()); 필터링된 dataset의 현재 row 개수
        	//this.alert(this.ds_product_list.rowposition);   필터링된 dataset의 rowposition
        	this.Grid_list.setCellProperty( "head", 0, "text", '0');
        	for(var nRow=0; nRow < this.ds_product_list.getRowCount(); nRow++) 
        	{ 
        		// chk 컬럼의 값을 Y로 변경 
        		this.ds_product_list.setColumn(nRow, "chk", 'N'); 
        	}
        	
        	// 클릭한 인덱스 번호 값 변수에 저장
        	var iNo = new Number(obj.text);
        	// 해당 페이지의 첫 rownum값
        	var iFirstNum = (iNo-1) * this.fv_iMaxAmount + 1;
        	// 해당 페이지의 마지막 rownum값
        	var iLastNum = iFirstNum + this.fv_iMaxAmount;
        	//스타일 세팅
        	this.fn_SetStyle();
        	obj.style.set_color("red");
        	obj.style.set_font("bold 10 Dotum");

        	// 데이터셋의 범위를 rownum 범위 안으로 제한
        	this.ds_product_list.filter("");
        	this.ds_product_list.filter("rownum >= " + iFirstNum+" && rownum < " + iLastNum);
        }

        //-------------------------------------------------------------------------------------------------
        // 이전 버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Prev_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo - 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("getProductDetailList", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // 다음버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Next_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo + 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("getProductDetailList", 0, "succ");
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

        		if (this.fv_iServerRowCount < (i * this.fv_iMaxAmount))
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
        		this.div_page.components["stc_No"+i].style.set_font("9 Dotum");
        	}	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_product_list.addEventHandler("oncolumnchanged", this.ds_product_list_oncolumnchanged, this);
            this.addEventHandler("onload", this.PRODUCT_LIST_onload, this);
            this.list_com_main.addEventHandler("onitemchanged", this.list_com_main_onitemchanged, this);
            this.list_com_middle.addEventHandler("onitemchanged", this.list_com_middle_onitemchanged, this);
            this.list_com_sub.addEventHandler("onitemchanged", this.list_com_sub_onitemchanged, this);
            this.btn_clean.addEventHandler("onclick", this.btn_clean_onclick, this);
            this.btn_list_search00.addEventHandler("onclick", this.btn_search_onclick, this);
            this.radio_Wtr.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Static09.addEventHandler("onclick", this.Static09_onclick, this);
            this.btn_close00.addEventHandler("onclick", this.btn_close00_onclick, this);
            this.Grid_list.addEventHandler("oncelldblclick", this.Grid_list_oncelldblclick, this);
            this.Grid_list.addEventHandler("oncellclick", this.Grid_list_oncellclick, this);
            this.Grid_list.addEventHandler("onheadclick", this.Grid_list_onheadclick, this);
            this.btn_list_add.addEventHandler("onclick", this.btn_list_add_onclick, this);
            this.btn_list_delete.addEventHandler("onclick", this.btn_list_delete_onclick, this);
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

        this.loadIncludeScript("PRODUCT_LIST.xfdl");

       
    };
}
)();
