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
                this.set_name("zipcode");
                this.set_classname("zipcode");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,465,193);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_plaintiff", "absolute", "499", "115", "445", "106", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_pladef");
            obj.set_scrollbars("fixedvert");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"44\"/><Column size=\"67\"/><Column size=\"321\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"우편번호\"/><Cell col=\"2\" text=\"주소\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:pladefSeq\" expr=\"currow+1\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:center;\" text=\"bind:pladefName\" editlimit=\"30\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" style=\"align:right;\" text=\"bind:pladefClamVol\" mask=\"###,###.###,###\" editlimit=\"15\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_33", "absolute", "7", "69", "96", "19", null, null, this);
            obj.set_text("기본정보");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "8", "8", "445", "50", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("cornflowerblue");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "26", "18", "168", "29", null, null, this);
            obj.set_text("우편번호조회");
            obj.style.set_color("whitesmoke");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "504", "81", "433", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "499", "81", "100", "25", null, null, this);
            obj.set_text("동이름");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_no", "absolute", "601", "84", "156", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "400", "66", "52", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("검색");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "13", "98", "433", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "13", "122", "433", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "13", "98", "100", "25", null, null, this);
            obj.set_text("주소");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "13", "122", "100", "25", null, null, this);
            obj.set_text("상대주소");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr2", "absolute", "116", "125", "326", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("alpha");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_enable("true");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "black");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pos", "absolute", "116", "100", "60", "20", null, null, this);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.style.set_font("굴림,9");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr", "absolute", "176", "100", "266", "20", null, null, this);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.style.set_font("굴림,9");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "343", "160", "52", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "400", "160", "52", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 465, 193, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("zipcode");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item20","grd_plaintiff","visible","ds_pladef","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_no","value","ds_lawsuit","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_addr2","value","ds_lawsuit","lawsuitAplCaseCode");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("zipcode.xfdl", "Lib::common.xjs");
        this.registerScript("zipcode.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출

        var fv_chk = "";

        this.btn_search_onclick=function(obj,e)
        {
        	fv_chk = "";
        	
        	acx_browser.Navigate2("http://localhost:8080/zipcodeSearch.jsp");	//Jsp 호출
        }

        function acx_browser_TitleChange(obj,e)
        {
        	if (fv_chk != "" && fv_chk != e.Text)
            {
        		var address = e.Text;
        		
        		var addressspl = address.split("_");
                edt_pos.value = addressspl[0];
                edt_addr.value = addressspl[1];
            }
           
            fv_chk = e.Text;
        }

        function btn_save_onclick(obj,e)
        {
        	var addr = edt_addr.value + " " + edt_addr2.value
        	var rtn = edt_pos.value + "&" + addr
        	close(rtn);
        }

        function btn_cancel_onclick(obj,e)
        {
        	close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta_title.addEventHandler("onclick", this.sta_title_onclick, this);
            this.sta_no.addEventHandler("onclick", this.sta_no_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.sta_06.addEventHandler("onclick", this.sta_06_onclick, this);
            this.edt_addr2.addEventHandler("oneditclick", this.edt_app_case_no_oneditclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);

        };

        this.loadIncludeScript("zipcode.xfdl");

       
    };
}
)();
