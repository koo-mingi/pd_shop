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
                this.set_name("sample_0129");
                this.set_classname("sample_0129_bind");
                this.set_titletext("bind & tab order");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">A</Col></Row><Row><Col id=\"Column0\">B</Col></Row><Row><Col id=\"Column0\">B</Col></Row><Row><Col id=\"Column0\">A</Col></Row><Row><Col id=\"Column0\">C</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsComInner", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">A</Col><Col id=\"text\">test01</Col></Row><Row><Col id=\"value\">B</Col><Col id=\"text\">test02</Col></Row><Row><Col id=\"value\">C</Col><Col id=\"text\">test03</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGrid", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Combo("Combo00", "absolute", "2.83%", "16", null, "20", "82.52%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            obj.set_innerdataset("@dsComInner");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");

            obj = new Grid("Grid00", "absolute", "18.07%", "68", null, "232", "38.28%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("dsGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"Column3\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "2.73%", "68", null, "48", "85.16%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "3.13%", "143", null, "50", "85.16%", null, this);
            obj.set_taborder("4");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "6.93%", "347", null, "214", "39.84%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "6.26%", "26", null, "20", "67.96%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_tabstop("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "35.36%", "25", null, "20", "38.86%", null, this.Div00);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "64.64%", "24", null, "20", "9.58%", null, this.Div00);
            obj.set_taborder("2");
            obj.set_tabstop("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "6.08%", "57", null, "20", "68.14%", null, this.Div00);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "35.36%", "57", null, "20", "38.86%", null, this.Div00);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "64.46%", "59", null, "20", "9.76%", null, this.Div00);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "6.08%", "91", null, "20", "68.14%", null, this.Div00);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit07", "absolute", "34.99%", "90", null, "20", "39.23%", null, this.Div00);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit08", "absolute", "65.01%", "91", null, "20", "9.21%", null, this.Div00);
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "17.68%", "139", null, "41", "60.22%", null, this.Div00);
            obj.set_taborder("9");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "47.88%", "131", null, "41", "30.02%", null, this.Div00);
            obj.set_taborder("10");
            obj.set_text("Button00");
            obj.set_tabstop("false");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 214, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("sample_0129_bind");
            		p.set_titletext("bind & tab order");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Combo00","value","dsCombo","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Edit00","value","dsGrid","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("asd.xfdl");

       
    };
}
)();
