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
                this.set_name("PRODUCT_ADD");
                this.set_titletext("New Form");
                this.set_dragscrolltype("none");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_cursor("text");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("   상품 등록");
            obj.style.set_align("left");
            obj.style.set_background("coral");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00", "absolute", "949", "17", "55", "31", null, null, this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WF_crudL2_N.png') stretch 9,9 left top");
            obj.style.set_border("0 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 11 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "14", "65", "996", "471", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "20", "70", "984", "25", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "70", "105", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_text("상품분류");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_usedecorate("false");
            this.addChild(obj.name, obj);

            obj = new Combo("list_com", "absolute", "133", "73", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_text("대분류");
            obj.set_innerdataset("ds_clas_code");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");

            obj = new Combo("list_com00", "absolute", "269", "73", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_text("중분류");
            obj.set_innerdataset("ds_clas_code");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");

            obj = new Combo("list_com01", "absolute", "405", "73", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_text("소분류");
            obj.set_innerdataset("ds_clas_code");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");

            obj = new Button("btn_add_save", "absolute", "941", "71", "55", "23", null, null, this);
            obj.set_taborder("8");
            obj.set_text("등록");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "94", "984", "25", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_No", "absolute", "132", "97", "866", "19", null, null, this);
            obj.set_taborder("10");
            obj.style.setStyleValue("background", "disabled", "#f7f7f7ff");
            obj.style.setStyleValue("color", "disabled", "#999999ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "94", "105", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("상품명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "118", "984", "25", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_No00", "absolute", "132", "121", "866", "19", null, null, this);
            obj.set_taborder("13");
            obj.style.setStyleValue("background", "disabled", "#f7f7f7ff");
            obj.style.setStyleValue("color", "disabled", "#999999ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "20", "118", "105", "25", null, null, this);
            obj.set_taborder("14");
            obj.set_text("상품설명요약");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "20", "142", "984", "125", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "20", "142", "105", "125", null, null, this);
            obj.set_taborder("16");
            obj.set_text("상세설명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea_detail", "absolute", "133", "146", "865", "116", null, null, this);
            obj.set_taborder("17");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static01", "absolute", "32", "71", "37", "23", null, null, this);
            obj.set_taborder("18");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static00", "absolute", "32", "95", "37", "23", null, null, this);
            obj.set_taborder("19");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Div("detail_char_length", "absolute", "91.31%", "243", null, "21", "1.86%", null, this);
            obj.set_taborder("20");
            obj.set_text("0 / 2000");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "20", "266", "984", "25", null, null, this);
            obj.set_taborder("21");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "20", "266", "105", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("상품가격");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_price", "absolute", "132", "269", "866", "19", null, null, this);
            obj.set_taborder("23");
            obj.style.setStyleValue("background", "disabled", "#f7f7f7ff");
            obj.style.setStyleValue("color", "disabled", "#999999ff");
            obj.set_inputfilter("dot,comma,sign,symbol,alpha,space");
            obj.set_displaynulltext("숫자만 입력하세요");
            obj.set_inputtype("number,digit");
            obj.set_imemode("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "20", "290", "984", "25", null, null, this);
            obj.set_taborder("24");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "20", "290", "105", "25", null, null, this);
            obj.set_taborder("25");
            obj.set_text("메인 이미지");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_No01", "absolute", "132", "293", "866", "19", null, null, this);
            obj.set_taborder("27");
            obj.style.setStyleValue("background", "disabled", "#f7f7f7ff");
            obj.style.setStyleValue("color", "disabled", "#999999ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_uploade", "absolute", "927", "291", "70", "23", null, null, this);
            obj.set_taborder("28");
            obj.set_text("파일추가");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "20", "314", "984", "194", null, null, this);
            obj.set_taborder("29");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "20", "314", "105", "194", null, null, this);
            obj.set_taborder("30");
            obj.set_text("상세보기 이미지");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_uploade00", "absolute", "927", "316", "70", "23", null, null, this);
            obj.set_taborder("31");
            obj.set_text("파일추가");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "133", "341", "865", "163", null, null, this);
            obj.set_taborder("32");
            obj.set_autofittype("col");
            obj.set_scrollbars("autoboth");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"811\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"파일명\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "20", "506", "984", "25", null, null, this);
            obj.set_taborder("33");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "20", "506", "105", "25", null, null, this);
            obj.set_taborder("34");
            obj.set_text("판매 여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid lightgrey");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_Wtr", "absolute", "132", "509", "203", "19", null, null, this);
            this.addChild(obj.name, obj);
            var radio_Wtr_innerdataset = new Dataset("radio_Wtr_innerdataset", this.radio_Wtr);
            radio_Wtr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">판매</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">판매불가</Col></Row></Rows>");
            obj.set_innerdataset(radio_Wtr_innerdataset);
            obj.set_taborder("35");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.style.set_color("black");
            obj.style.set_font("8 Dotum");

            obj = new Static("Static17", "absolute", "355", "506", "105", "25", null, null, this);
            obj.set_taborder("36");
            obj.set_text("판매처");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_No02", "absolute", "462", "509", "404", "19", null, null, this);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.style.setStyleValue("background", "disabled", "#f7f7f7ff");
            obj.style.setStyleValue("color", "disabled", "#999999ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list_search01", "absolute", "868", "507", "55", "23", null, null, this);
            obj.set_taborder("38");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "14", "541", "996", "203", null, null, this);
            obj.set_taborder("39");
            obj.style.set_background("antiquewhite");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "22", "548", null, "19", "82.32%", null, this);
            obj.set_taborder("40");
            obj.set_text("상품 옵션 등록");
            obj.style.set_font("bold 9 굴림체");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "22", "568", "982", "169", null, null, this);
            obj.set_taborder("41");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"57\"/><Column size=\"56\"/><Column size=\"57\"/><Column size=\"204\"/><Column size=\"72\"/><Column size=\"131\"/><Column size=\"46\"/><Column size=\"81\"/><Column size=\"74\"/><Column size=\"148\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\"/><Cell col=\"1\" edittype=\"text\" text=\"대분류\"/><Cell col=\"2\" text=\"중분류\"/><Cell col=\"3\" text=\"소분류\"/><Cell col=\"4\" text=\"상품명\"/><Cell col=\"5\" text=\"재고수량\"/><Cell col=\"6\" text=\"가격\"/><Cell col=\"7\" text=\"별점\"/><Cell col=\"8\" text=\"옵션여부\"/><Cell col=\"9\" text=\"판매여부\"/><Cell col=\"10\" text=\"판매처\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list_add", "absolute", "885", "544", "55", "23", null, null, this);
            obj.set_taborder("42");
            obj.set_text("등록");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list_search03", "absolute", "941", "544", "55", "23", null, null, this);
            obj.set_taborder("43");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 996, 50, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("   상품 등록");
            		p.style.set_align("left");
            		p.style.set_background("coral");
            		p.style.set_color("#ffffffff");
            		p.style.set_font("bold 12 Dotum");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.set_dragscrolltype("none");
            		p.style.set_cursor("text");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","edt_No","value","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_No00","value","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_price","value","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_No01","value","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_No02","value","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PRODUCT_ADD.xfdl", "Lib::common.xjs");
        this.addIncludeScript("PRODUCT_ADD.xfdl", "Lib::commonComp.xjs");
        this.registerScript("PRODUCT_ADD.xfdl", function() {

        /***********************************************************************************
        * Common Library
        ***********************************************************************************/
        //include "Lib::common.xjs";
        //include "Lib::commonComp.xjs"; // 메뉴 생성 및 닫기 메소드를 활용하기 위한 라이브러리.

        /***********************************************************************************
        * Script Source
        ***********************************************************************************/

        /***********************************************************************************
        * 글 작성 시 표시되는 쓰여진 글자 수 업데이트
        ***********************************************************************************/
        this.TextArea_detail_ontextchanged = function(obj,e)
        {
        	var strLength = this.TextArea_detail.getLength();
        	strLength += " / 2000 ";
        	this.detail_char_length.set_text(strLength);
        }

        /***********************************************************************************
        * 닫기
        ***********************************************************************************/
        this.btn_close_OnClick = function(obj,e)
        {
        	this.gfnClose();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_close00.addEventHandler("onclick", this.btn_close_OnClick, this);
            this.list_com.addEventHandler("onitemchanged", this.combo_Clas_Code_onitemchanged, this);
            this.list_com00.addEventHandler("onitemchanged", this.combo_Clas_Code_onitemchanged, this);
            this.list_com01.addEventHandler("onitemchanged", this.combo_Clas_Code_onitemchanged, this);
            this.btn_add_save.addEventHandler("onclick", this.btn_search_onclick, this);
            this.TextArea_detail.addEventHandler("ontextchanged", this.TextArea_detail_ontextchanged, this);
            this.Static12.addEventHandler("onclick", this.Static01_onclick, this);
            this.btn_uploade.addEventHandler("onclick", this.btn_uploade_onclick, this);
            this.Static14.addEventHandler("onclick", this.Static01_onclick, this);
            this.btn_uploade00.addEventHandler("onclick", this.btn_uploade_onclick, this);
            this.Static16.addEventHandler("onclick", this.Static01_onclick, this);
            this.radio_Wtr.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.btn_list_search01.addEventHandler("onclick", this.btn_search_onclick, this);
            this.Static19.addEventHandler("onclick", this.Static09_onclick, this);
            this.btn_list_add.addEventHandler("onclick", this.btn_list_add_onclick, this);
            this.btn_list_search03.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("PRODUCT_ADD.xfdl");

       
    };
}
)();
