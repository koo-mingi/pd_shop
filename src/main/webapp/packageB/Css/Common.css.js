//CSS=Common.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("VScrollBar", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "accessibility", obj, ["normal"]);
    this._addCss("Button", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("CheckBox", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#comboedit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Combo>#combolist", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileDownload", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileUpload", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#head", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#body", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid>#resizebutton", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#controledit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "accessibility", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "accessibility", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "accessibility", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "accessibility", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("GroupBox", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ImageViewer", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("MaskEdit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Menu", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBar", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "accessibility", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "accessibility", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TitleBarControl", "accessibility", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "accessibility", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "accessibility", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Edit.essential", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio.essential", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea.essential", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("VScrollBar", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "align", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#resizebutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "align", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin>#spinupbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Tab>#spinupbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#calendaredit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "align", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "align", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Spin.essential>#spinupbutton", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("VScrollBar", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "background", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("12");
    this._addCss("VScrollBar", "barminsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "barminsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "barminsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "barminsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "baroutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "baroutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "baroutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "baroutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#c9c9c9ff","");
    this._addCss("VScrollBar", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("VScrollBarControl", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("VScrollBar", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "bordertype", obj, ["normal"]);
    this._addCss("CheckBox", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#comboedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Combo>#combolist", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileUpload", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#body", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid>#resizebutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controledit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "bordertype", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "bordertype", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("GroupBox", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ImageViewer", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("MaskEdit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Menu", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBar", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "bordertype", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Edit.essential", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio.essential", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("TextArea.essential", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("");
    this._addCss("VScrollBar", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "color", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo>#dropbutton", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("FileUpload", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#resizebutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "color", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("ProgressBar", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin>#spinupbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Tab>#spinupbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "color", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "color", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo.essential>#dropbutton", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Spin.essential>#spinupbutton", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "cursor", obj, ["normal"]);
    this._addCss("CheckBox", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "cursor", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#comboedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "cursor", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Combo>#combolist", "cursor", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileDownload", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "cursor", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controledit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "cursor", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "cursor", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "cursor", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "cursor", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "cursor", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "cursor", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "cursor", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("GroupBox", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ImageViewer", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "cursor", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("MaskEdit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Menu", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("ProgressBar", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "cursor", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin>#spinupbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "cursor", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "cursor", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "cursor", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "cursor", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spinupbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TitleBarControl", "cursor", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "cursor", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "cursor", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "cursor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "cursor", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "cursor", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "cursor", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "cursor", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Edit.essential", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio.essential", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "cursor", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea.essential", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("11");
    this._addCss("VScrollBar", "decbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "decbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "decbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "decbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_font("");
    this._addCss("VScrollBar", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "font", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Edit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileUpload", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "font", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controledit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "font", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("ImageViewer", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "font", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("ProgressBar", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin>#spinupbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Tab>#spinupbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TitleBarControl", "font", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "font", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "font", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly>#comboedit", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.readonly", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Edit.essential", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea.essential", "font", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("VScrollBar", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "gradation", obj, ["normal"]);
    this._addCss("Button", "gradation", obj, ["disabled"]);
    this._addCss("CheckBox", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "gradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#comboedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Combo>#combolist", "gradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileUpload", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "gradation", obj, ["normal"]);
    this._addCss("Grid>#head", "gradation", obj, ["normal"]);
    this._addCss("Grid>#body", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid>#resizebutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controledit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "gradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "gradation", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "gradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "gradation", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "gradation", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "gradation", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "gradation", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("GroupBox", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ImageViewer", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "gradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("MaskEdit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Menu", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("ProgressBar", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "gradation", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin>#spinupbutton", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Spin>#spindownbutton", "gradation", obj, ["normal", "disabled"]);
    this._addCss("SpinControl", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "gradation", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "gradation", obj, ["normal", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Static", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "gradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spinupbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TitleBarControl", "gradation", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "gradation", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "gradation", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "gradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "gradation", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "gradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "gradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "gradation", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Edit.essential", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio.essential", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "gradation", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea.essential", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "imgoutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "imgoutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "imgoutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "imgoutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("11");
    this._addCss("VScrollBar", "incbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "incbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "incbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "incbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "opacity", obj, ["normal"]);
    this._addCss("Button", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("CheckBox", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "opacity", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#comboedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Combo>#combolist", "opacity", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileDownload", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileUpload", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "opacity", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controledit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "opacity", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "opacity", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "opacity", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "opacity", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "opacity", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "opacity", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "opacity", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("GroupBox", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ImageViewer", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "opacity", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("MaskEdit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Menu", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("ProgressBar", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "opacity", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin>#spinupbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "opacity", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "opacity", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Tab>#spinupbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Tab>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Tab>#extrabutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("TextArea", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TitleBarControl", "opacity", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "opacity", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "opacity", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "opacity", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "opacity", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "opacity", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "opacity", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Edit.essential", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio.essential", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea.essential", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("");
    this._addCss("VScrollBar", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "padding", obj, ["normal"]);
    this._addCss("CheckBox", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "padding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#dropbutton", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Combo>#combolist", "padding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileDownload", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileUpload", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "padding", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "padding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "padding", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "padding", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "padding", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "padding", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("ImageViewer", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "padding", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("ProgressBar", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinupbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "padding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spinupbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl", "padding", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#spinupbutton", "padding", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "padding", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Spin.readonly", "padding", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Calendar.essential", "padding", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "padding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Radio.essential", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("13");
    this._addCss("VScrollBar", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("VScrollBar", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "shadow", obj, ["normal"]);
    this._addCss("Button", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("CheckBox", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "shadow", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#comboedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "shadow", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Combo>#combolist", "shadow", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileDownload", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileUpload", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "shadow", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controledit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "shadow", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "shadow", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "shadow", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "shadow", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "shadow", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "shadow", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "shadow", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "shadow", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("GroupBox", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ImageViewer", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "shadow", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("MaskEdit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Menu", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("ProgressBar", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "shadow", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin>#spinupbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "shadow", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "shadow", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "shadow", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "shadow", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spinupbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TitleBarControl", "shadow", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "shadow", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "shadow", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "shadow", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "shadow", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "shadow", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "shadow", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "shadow", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Edit.essential", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio.essential", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "shadow", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea.essential", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "trackbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "trackbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "trackbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "trackbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#cfcfcfff","");
    this._addCss("VScrollBar", "border", obj, ["disabled"]);
    this._addCss("VScrollBarControl", "border", obj, ["disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("VScrollBar>#incbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("CheckBox", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo>#comboedit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Div", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileUpload", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#summ", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "background", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin>#spinupbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("Spin>#spindownbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("SpinControl>#spinedit", "background", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("Static", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#calendaredit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "background", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "background", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly>#comboedit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar.essential>#dropbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Radio.essential", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "background", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("VScrollBar>#incbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo>#comboedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileUpload", "border", obj, ["normal", "pushed", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Menu", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("PopupDiv", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#calendaredit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly>#comboedit", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar.essential>#calendaredit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_IncButton.png')");
    this._addCss("VScrollBar>#incbutton", "image", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("VScrollBar>#incbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo>#dropbutton", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Tab>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Spin.essential>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_IncButton_O.png')");
    this._addCss("VScrollBar>#incbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_IncButton_D.png')");
    this._addCss("VScrollBar>#incbutton", "image", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_DecButton.png')");
    this._addCss("VScrollBar>#decbutton", "image", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_WF_DecButton_O.png')");
    this._addCss("VScrollBar>#decbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_DecButton_D.png')");
    this._addCss("VScrollBar>#decbutton", "image", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("VScrollBar>#trackbar", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Div", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileDownload", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "align", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ImageViewer", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupDiv", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBar", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Tab>#extrabutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#d4d4d4ff","","","0","0","0","0","true");
    this._addCss("VScrollBar>#trackbar", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#b2b6bfff","");
    this._addCss("VScrollBar>#trackbar", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar>#trackbar", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "image", obj, ["normal"]);
    this._addCss("Button", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid>#resizebutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("VScrollBar>#trackbar", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "imagealign", obj, ["normal"]);
    this._addCss("Button", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid>#resizebutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#a4a4a4ff","","","0","0","0","0","true");
    this._addCss("VScrollBar>#trackbar", "background", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBar>#trackbar", "background", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#888c95ff","");
    this._addCss("VScrollBar>#trackbar", "border", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBar>#trackbar", "border", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#dededeff","","","0","0","0","0","true");
    this._addCss("VScrollBar>#trackbar", "background", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["disabled"]);
    this._addCss("HScrollBar>#trackbar", "background", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#dededeff","");
    this._addCss("VScrollBar>#trackbar", "border", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["disabled"]);
    this._addCss("HScrollBar>#trackbar", "border", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#c9c9c9ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("HScrollBar", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#cfcfcfff","","0","none","","","0","none","","","0","none","","");
    this._addCss("HScrollBar", "border", obj, ["disabled"]);
    this._addCss("HScrollBarControl", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_IncButton2.png')");
    this._addCss("HScrollBar>#incbutton", "image", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_WF_IncButton2_O.png')");
    this._addCss("HScrollBar>#incbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_IncButton2_D.png')");
    this._addCss("HScrollBar>#incbutton", "image", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_DecButton2.png')");
    this._addCss("HScrollBar>#decbutton", "image", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_WF_DecButton2_O.png')");
    this._addCss("HScrollBar>#decbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_DecButton2_D.png')");
    this._addCss("HScrollBar>#decbutton", "image", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#c9c9c9ff","","0","none","","","0","none","","","1","solid","#c9c9c9ff","");
    this._addCss("*>#resizebutton", "border", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Button", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("FileDownload", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("Static.sta_POP_Title", "background", obj, ["normal", "disabled"]);
    this._addCss("Spin>#spinupbutton", "background", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Spin>#spindownbutton", "background", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("SpinControl>#spinupbutton", "background", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("SpinControl>#spindownbutton", "background", obj, ["mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#c2c2c2ff","");
    this._addCss("Button", "border", obj, ["normal", "disabled"]);
    this._addCss("FileDownload", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("Button", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("FileDownload", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Button", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("FileDownload", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("FileUpload", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Button", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("CheckBox", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "font", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#combolist", "font", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileDownload", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "font", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "font", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "font", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("GroupBox", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ListBox", "font", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "font", obj, ["normal", "disabled"]);
    this._addCss("Radio", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "font", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Static", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "font", obj, ["normal", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.readonly", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Spin.readonly", "font", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Calendar.essential", "font", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "font", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Radio.essential", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f8f8f8");
    this._addCss("Button", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "gradation", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("Button", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#444444ff","");
    this._addCss("Button", "border", obj, ["mouseover", "pushed", "selected"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #dfdfdf");
    this._addCss("Button", "gradation", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Combo>#dropbutton", "gradation", obj, ["mouseover", "selected", "focused"]);
    this._addCss("FileDownload", "gradation", obj, ["mouseover"]);
    this._addCss("Grid>#controlbutton", "gradation", obj, ["mouseover"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "gradation", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #dfdfdf 0,100 #ffffff");
    this._addCss("Button", "gradation", obj, ["pushed"]);
    this._addCss("Combo>#dropbutton", "gradation", obj, ["pushed"]);
    this._addCss("FileDownload", "gradation", obj, ["pushed"]);
    this._addCss("Grid>#controlbutton", "gradation", obj, ["pushed"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","dotted","#777777ff","");
    this._addCss("Button", "border", obj, ["focused"]);
    this._addCss("CheckBox", "border", obj, ["focused"]);
    this._addCss("Combo", "border", obj, ["focused"]);
    this._addCss("Combo>#combolist", "border", obj, ["focused"]);
    this._addCss("Edit", "border", obj, ["focused"]);
    this._addCss("FileDownload", "border", obj, ["focused"]);
    this._addCss("FileUpload", "border", obj, ["focused"]);
    this._addCss("Grid>#controledit", "border", obj, ["focused"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["focused"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcheckbox", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "border", obj, ["focused"]);
    this._addCss("ImageViewer", "border", obj, ["focused"]);
    this._addCss("ListBox", "border", obj, ["focused"]);
    this._addCss("MaskEdit", "border", obj, ["focused"]);
    this._addCss("Menu", "border", obj, ["focused"]);
    this._addCss("ProgressBar", "border", obj, ["focused"]);
    this._addCss("ProgressBarControl", "border", obj, ["focused"]);
    this._addCss("Radio", "border", obj, ["focused"]);
    this._addCss("Spin", "border", obj, ["focused"]);
    this._addCss("SpinControl", "border", obj, ["focused"]);
    this._addCss("Tab>#spinupbutton", "border", obj, ["focused"]);
    this._addCss("Tab>#spindownbutton", "border", obj, ["focused"]);
    this._addCss("Tab>#extrabutton", "border", obj, ["focused"]);
    this._addCss("TextArea", "border", obj, ["focused"]);
    this._addCss("Calendar.readonly", "border", obj, ["focused"]);
    this._addCss("Combo.readonly", "border", obj, ["focused"]);
    this._addCss("Spin.readonly", "border", obj, ["focused"]);
    this._addCss("Calendar.essential", "border", obj, ["focused"]);
    this._addCss("CheckBox.essential", "border", obj, ["focused"]);
    this._addCss("Combo.essential", "border", obj, ["focused"]);
    this._addCss("Edit.essential", "border", obj, ["focused"]);
    this._addCss("MaskEdit.essential", "border", obj, ["focused"]);
    this._addCss("Spin.essential", "border", obj, ["focused"]);
    this._addCss("TextArea.essential", "border", obj, ["focused"]);

    obj = new nexacro.Style_background("#fefdfeff","","","0","0","0","0","true");
    this._addCss("Button", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#b6b6b6");
    this._addCss("Button", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["disabled"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("CheckBox", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "align", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#comboedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#combolist", "align", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Edit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileUpload", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controledit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "align", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "align", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "align", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "align", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "align", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "align", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Static.sta_POP_Title", "align", obj, ["normal", "disabled"]);
    this._addCss("Radio", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Static", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Calendar.readonly", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "align", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "align", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.essential", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio.essential", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#80808000","");
    this._addCss("CheckBox", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Radio", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("CheckBox.essential", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Radio.essential", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("CheckBox", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Radio", "buttonalign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("","img::img_WF_CheckBox.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("CheckBox", "buttonbackgroundimagemode", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackgroundimagemode", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "buttonbackgroundimagemode", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("CheckBox", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("CheckBox", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileUpload", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tab", "buttonbordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("CheckBox.essential", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("CheckBox", "buttongradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileUpload", "buttongradation", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttongradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tab", "buttongradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("CheckBox.essential", "buttongradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Radio.essential", "buttongradation", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_Check.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("14");
    this._addCss("CheckBox", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Radio", "buttonsize", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Radio.essential", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("CheckBox", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Combo", "color", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Combo>#combolist", "color", obj, ["normal", "selected"]);
    this._addCss("Div", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid", "color", obj, ["normal"]);
    this._addCss("Grid>#controledit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcheckbox", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ImageViewer", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("MaskEdit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("PopupDiv", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "color", obj, ["normal"]);
    this._addCss("Radio", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Spin", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Spin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("SpinControl>#spinedit", "color", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Static", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TitleBarControl", "color", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("Calendar.readonly", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.readonly", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "color", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Calendar.essential>#calendaredit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Combo.essential", "color", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Edit.essential", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEdit.essential", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Radio.essential", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Spin.essential", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Spin.essential>#spinedit", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.essential", "color", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_padding("0 0 1 3");
    this._addCss("CheckBox", "textpadding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "textpadding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "textpadding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("","img::img_WF_CheckBox_O.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","img::img_WF_CheckBox_D.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["disabled"]);
    this._addCss("CheckBox.essential", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_Check_D.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["disabled"]);
    this._addCss("CheckBox.essential", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_color("#969696");
    this._addCss("CheckBox", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "color", obj, ["disabled"]);
    this._addCss("Radio", "color", obj, ["disabled"]);
    this._addCss("CheckBox.essential", "color", obj, ["disabled"]);
    this._addCss("Radio.essential", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Combo", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Combo>#combolist", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Edit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid", "background", obj, ["normal"]);
    this._addCss("Grid>#head", "background", obj, ["normal"]);
    this._addCss("Grid>#body", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controledit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo>#combolist", "background", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("GroupBox", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ImageViewer", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "background", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("MaskEdit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("PopupMenu", "background", obj, ["normal"]);
    this._addCss("Form.from_POP", "background", obj, ["normal"]);
    this._addCss("ProgressBar", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("TextArea", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TitleBarControl", "background", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("Calendar.essential", "background", obj, ["normal"]);
    this._addCss("Combo.essential", "background", obj, ["normal"]);
    this._addCss("Spin.essential", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#bdbdbdff","");
    this._addCss("Combo", "border", obj, ["normal"]);
    this._addCss("Edit", "border", obj, ["normal"]);
    this._addCss("Grid>#controledit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["normal"]);
    this._addCss("GroupBox", "border", obj, ["normal", "mouseover"]);
    this._addCss("ImageViewer", "border", obj, ["normal", "mouseover"]);
    this._addCss("MaskEdit", "border", obj, ["normal"]);
    this._addCss("Spin", "border", obj, ["normal"]);
    this._addCss("SpinControl", "border", obj, ["normal"]);
    this._addCss("TextArea", "border", obj, ["normal"]);
    this._addCss("Calendar.readonly", "border", obj, ["normal", "mouseover", "pushed", "selected"]);
    this._addCss("Combo.readonly", "border", obj, ["normal", "mouseover", "pushed", "selected"]);
    this._addCss("Edit.readonly", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TextArea.readonly", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "border", obj, ["normal"]);
    this._addCss("Combo.essential", "border", obj, ["normal"]);
    this._addCss("Edit.essential", "border", obj, ["normal"]);
    this._addCss("MaskEdit.essential", "border", obj, ["normal"]);
    this._addCss("Spin.essential", "border", obj, ["normal"]);
    this._addCss("TextArea.essential", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Combo", "buttonsize", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "buttonsize", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcalendar", "buttonsize", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "buttonsize", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly", "buttonsize", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "buttonsize", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential", "buttonsize", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("Combo", "itemaccessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#combolist", "itemaccessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "itemaccessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemaccessibility", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("ListBox", "itemaccessibility", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "itemaccessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupMenu", "itemaccessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Radio", "itemaccessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.readonly", "itemaccessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itemaccessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Radio.essential", "itemaccessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["normal", "disabled"]);
    this._addCss("Combo>#combolist", "itembackground", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["normal"]);
    this._addCss("ListBox", "itembackground", obj, ["normal", "disabled"]);
    this._addCss("PopupMenu", "itembackground", obj, ["normal", "focused", "disabled"]);
    this._addCss("Combo.readonly", "itembackground", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itembackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Combo", "itemborder", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#combolist", "itemborder", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "itemborder", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemborder", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("ListBox", "itemborder", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "itemborder", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("PopupMenu", "itemborder", obj, ["normal"]);
    this._addCss("Radio", "itemborder", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.readonly", "itemborder", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itemborder", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Radio.essential", "itemborder", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("Combo", "itembordertype", obj, ["normal", "disabled"]);
    this._addCss("Combo>#combolist", "itembordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "itembordertype", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembordertype", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("ListBox", "itembordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("PopupMenu", "itembordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.readonly", "itembordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itembordertype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Combo", "itemcolor", obj, ["normal", "selected", "disabled"]);
    this._addCss("Combo>#combolist", "itemcolor", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "itemcolor", obj, ["normal", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemcolor", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("ListBox", "itemcolor", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Combo.readonly", "itemcolor", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itemcolor", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Combo", "itemfont", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "itemfont", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.readonly", "itemfont", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itemfont", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Combo", "itemgradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#combolist", "itemgradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "itemgradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemgradation", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("ListBox", "itemgradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "itemgradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupMenu", "itemgradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Radio", "itemgradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.readonly", "itemgradation", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itemgradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Radio.essential", "itemgradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("21");
    this._addCss("Combo", "itemheight", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#combolist", "itemheight", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("FileUpload", "itemheight", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "itemheight", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemheight", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("ListBox", "itemheight", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Combo.readonly", "itemheight", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itemheight", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("0 9 0 9");
    this._addCss("Combo", "itempadding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#combolist", "itempadding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "itempadding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itempadding", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("ListBox", "itempadding", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Combo.readonly", "itempadding", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itempadding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Combo", "popuptype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "popuptype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcalendar", "popuptype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "popuptype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupMenu", "popuptype", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "popuptype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly", "popuptype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "popuptype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential", "popuptype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#0f7ec5ff","");
    this._addCss("Combo", "border", obj, ["mouseover", "selected"]);
    this._addCss("Edit", "border", obj, ["mouseover"]);
    this._addCss("FileDownload", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controledit", "border", obj, ["mouseover"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["mouseover"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["mouseover"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["mouseover", "selected"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["mouseover", "selected"]);
    this._addCss("MaskEdit", "border", obj, ["mouseover"]);
    this._addCss("Spin", "border", obj, ["mouseover", "pushed"]);
    this._addCss("SpinControl", "border", obj, ["mouseover", "pushed"]);
    this._addCss("TextArea", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#3ca1dcff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["mouseover", "focused"]);
    this._addCss("Combo>#combolist", "itembackground", obj, ["mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["mouseover", "disabled", "focused"]);
    this._addCss("ListBox", "itembackground", obj, ["mouseover"]);
    this._addCss("Combo.essential", "itembackground", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Combo", "itembordertype", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo", "itembordertype", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Menu", "itembordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Radio", "itembordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential", "itembordertype", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Radio.essential", "itembordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Combo", "itemcolor", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo", "itemcolor", obj, ["mouseover", "focused"]);
    this._addCss("Combo.essential", "itemcolor", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#e9f2f4ff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["selected"]);
    this._addCss("Combo>#combolist", "itembackground", obj, ["selected"]);
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["selected"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["selected"]);
    this._addCss("ListBox", "itembackground", obj, ["selected", "focused"]);
    this._addCss("Combo.essential", "itembackground", obj, ["selected"]);

    obj = new nexacro.Style_background("#fdfdfdff","","","0","0","0","0","true");
    this._addCss("Combo", "background", obj, ["disabled"]);
    this._addCss("Combo>#comboedit", "background", obj, ["disabled"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["disabled"]);
    this._addCss("Edit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["disabled"]);
    this._addCss("MaskEdit", "background", obj, ["disabled"]);
    this._addCss("TextArea", "background", obj, ["disabled"]);
    this._addCss("Calendar.essential", "background", obj, ["disabled"]);
    this._addCss("Combo.essential", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#cfcfcfff","");
    this._addCss("Combo", "border", obj, ["disabled"]);
    this._addCss("Edit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["disabled"]);
    this._addCss("GroupBox", "border", obj, ["disabled"]);
    this._addCss("ImageViewer", "border", obj, ["disabled"]);
    this._addCss("ListBox", "border", obj, ["disabled"]);
    this._addCss("MaskEdit", "border", obj, ["disabled"]);
    this._addCss("Spin", "border", obj, ["disabled"]);
    this._addCss("SpinControl", "border", obj, ["disabled"]);
    this._addCss("TextArea", "border", obj, ["disabled"]);
    this._addCss("Calendar.essential", "border", obj, ["disabled"]);
    this._addCss("Combo.essential", "border", obj, ["disabled"]);
    this._addCss("Edit.essential", "border", obj, ["disabled"]);
    this._addCss("MaskEdit.essential", "border", obj, ["disabled"]);
    this._addCss("Spin.essential", "border", obj, ["disabled"]);
    this._addCss("TextArea.essential", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("Combo", "color", obj, ["disabled"]);
    this._addCss("Combo>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Edit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["disabled"]);
    this._addCss("GroupBox", "color", obj, ["disabled"]);
    this._addCss("ListBox", "color", obj, ["disabled"]);
    this._addCss("MaskEdit", "color", obj, ["disabled"]);
    this._addCss("Spin", "color", obj, ["disabled"]);
    this._addCss("SpinControl", "color", obj, ["disabled"]);
    this._addCss("TextArea", "color", obj, ["disabled"]);
    this._addCss("Calendar.essential", "color", obj, ["disabled"]);
    this._addCss("Combo.essential", "color", obj, ["disabled"]);
    this._addCss("Combo.essential>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Edit.essential", "color", obj, ["disabled"]);
    this._addCss("MaskEdit.essential", "color", obj, ["disabled"]);
    this._addCss("Spin.essential", "color", obj, ["disabled"]);
    this._addCss("Spin.essential>#spinedit", "color", obj, ["disabled"]);
    this._addCss("TextArea.essential", "color", obj, ["disabled"]);

    obj = new nexacro.Style_padding("0 9 0 9");
    this._addCss("Combo>#comboedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controledit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#calendaredit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.readonly>#comboedit", "padding", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.essential", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("#3da2df");
    this._addCss("Combo>#comboedit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controledit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "selectbackground", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "selectbackground", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinedit", "selectbackground", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Calendar.readonly>#calendaredit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.readonly>#comboedit", "selectbackground", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.readonly", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.essential", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "selectbackground", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("TextArea.essential", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Combo>#comboedit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controledit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "selectcolor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "selectcolor", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinedit", "selectcolor", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("TextArea", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#calendaredit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.readonly>#comboedit", "selectcolor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.readonly", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.essential", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("TextArea.essential", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#ccccccff","");
    this._addCss("Combo>#dropbutton", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::cmb_WF_Drop.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Combo.essential>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::cmb_WF_Drop_D.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#8e8e8eff","");
    this._addCss("Combo>#combolist", "border", obj, ["normal", "mouseover", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "border", obj, ["normal", "mouseover", "disabled", "selected"]);
    this._addCss("ListBox", "border", obj, ["normal", "mouseover", "selected"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Combo>#combolist", "color", obj, ["mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["mouseover", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "color", obj, ["mouseover"]);
    this._addCss("Menu", "color", obj, ["normal"]);
    this._addCss("PopupMenu", "color", obj, ["mouseover", "pushed", "selected"]);
    this._addCss("Static.sta_POP_Title", "color", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("Div", "stepalign", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupDiv", "stepalign", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Tab", "stepalign", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl", "stepalign", obj, ["normal", "deactivate", "disabled"]);

    obj = new nexacro.Style_value("#3da2df");
    this._addCss("Edit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f7f8f7");
    this._addCss("FileDownload", "gradation", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("FileDownload", "linespace", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static", "linespace", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#b4b4b4");
    this._addCss("FileDownload", "color", obj, ["disabled"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("FileUpload", "buttonaccessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("1 solid #b6b6b6");
    this._addCss("FileUpload", "buttonborder", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("FileUpload", "buttoncolor", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("FileUpload", "buttonfont", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fcfcfc 0,100 #f7f7f7");
    this._addCss("FileUpload", "buttongradation", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("FileUpload", "buttonpadding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("73");
    this._addCss("FileUpload", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("FileUpload");
    this._addCss("FileUpload", "buttontext", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("FileUpload", "editaccessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("1","solid","#bbbbbbff","");
    this._addCss("FileUpload", "editborder", obj, ["normal", "pushed", "focused"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("FileUpload", "editbordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("FileUpload", "editcolor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("FileUpload", "editfont", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("FileUpload", "editgradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 9 0 9");
    this._addCss("FileUpload", "editpadding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#838383ff","");
    this._addCss("FileUpload", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f0f0f0");
    this._addCss("FileUpload", "buttongradation", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#898989ff","");
    this._addCss("FileUpload", "editborder", obj, ["mouseover"]);

    obj = new nexacro.Style_value("1 solid #838383");
    this._addCss("FileUpload", "buttonborder", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #eaeaea 0,100 #fefefe");
    this._addCss("FileUpload", "buttongradation", obj, ["pushed"]);

    obj = new nexacro.Style_background("#ebebebff","","","0","0","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("1 solid #bdbdbd");
    this._addCss("FileUpload", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_color("#adadad");
    this._addCss("FileUpload", "buttoncolor", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ebebebff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#bdbdbdff","");
    this._addCss("FileUpload", "editborder", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#6477adff","","1","solid","#c9c9c9ff","","1","solid","#76b9ccff","","0","none","","");
    this._addCss("Grid", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid", "selectline", obj, ["normal"]);
    this._addCss("Grid>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid>#body", "selectline", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "selectline", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "selectline", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid>#head", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid>#body", "selectlinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "selectlinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "selectlinetype", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_TreeClose.png')");
    this._addCss("Grid", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_WF_TreeItem.png')");
    this._addCss("Grid", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "treeitemmargin", obj, ["normal"]);

    obj = new nexacro.Style_line("0","","","");
    this._addCss("Grid", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::img_WF_TreeOpen.png')");
    this._addCss("Grid", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#6477adff","","1","solid","#6477adff","");
    this._addCss("Grid>#head", "border", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid>#head", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("Grid>#head", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("Grid>#head", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Gulim");
    this._addCss("Grid>#head", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #ededed");
    this._addCss("Grid>#head", "cellgradation", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #ededed");
    this._addCss("Grid>#head", "cellgradation2", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#eaeaeaff","");
    this._addCss("Grid>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid>#body", "cellline", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#head", "celllinespace", obj, ["normal"]);
    this._addCss("Grid>#body", "celllinespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "celllinespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "celllinespace", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#head", "celllinetype", obj, ["normal"]);
    this._addCss("Grid>#summ", "celllinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "celllinetype", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Grid>#head", "cellpadding", obj, ["normal"]);
    this._addCss("Grid>#body", "cellpadding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "cellpadding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellpadding", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#head", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectbackground", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "selectbackground", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid>#head", "selectborder", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectborder", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "selectborder", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_color("");
    this._addCss("Grid>#head", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectcolor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "selectcolor", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_font("");
    this._addCss("Grid>#head", "selectfont", obj, ["normal"]);
    this._addCss("Grid>#body", "selectfont", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "selectfont", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "selectfont", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#head", "selectgradation", obj, ["normal"]);
    this._addCss("Grid>#body", "selectgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "selectgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "selectgradation", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_background("@gradation","img::img_WF_Essential.png","","0","0","0","0","true");
    this._addCss(".CellEssential", "background", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #ededed");
    this._addCss(".CellEssential", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e1e1e1ff","","0","none","","","0","none","","","1","solid","#c9c9c9ff","");
    this._addCss("Grid>#body", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Grid>#body", "cellalign", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#body", "cellcolor", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#body", "cellcolor2", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Grid>#body", "cellfont", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#body", "cellgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "cellgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellgradation", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#body", "cellgradation2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "cellgradation2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellgradation2", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_value("exhor");
    this._addCss("Grid>#body", "celllinetype", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("#f1f1ee");
    this._addCss("Grid>#body", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#body", "selectborder", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#body", "selectcolor", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#fdfbddff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#fdfbddff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_value("#fdfbdd");
    this._addCss("Grid>#body", "selectbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#969696");
    this._addCss("Grid>#body", "cellcolor", obj, ["disabled"]);

    obj = new nexacro.Style_color("#969696");
    this._addCss("Grid>#body", "cellcolor2", obj, ["disabled"]);

    obj = new nexacro.Style_value("#ffffff");
    this._addCss("Grid>#body", "selectbackground", obj, ["disabled"]);

    obj = new nexacro.Style_color("#969696");
    this._addCss("Grid>#body", "selectcolor", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#a1d9e9ff","","0","none","","","0","none","","","1","solid","#a1d9e9ff","");
    this._addCss("Grid>#summ", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("Grid>#summ", "cellalign", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellalign", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_background("#eefafdff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellbackground", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_background("#eefafdff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellbackground2", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid>#summ", "cellcolor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellcolor", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid>#summ", "cellcolor2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellcolor2", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_font("");
    this._addCss("Grid>#summ", "cellfont", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellfont", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#76b9ccff","");
    this._addCss("Grid>#summ", "cellline", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellline", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Grid>#controlmaskedit", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("MaskEdit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "align", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("MaskEdit.readonly", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "align", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("MaskEdit.essential", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.essential", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("Grid>#controltextarea", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.readonly", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.essential", "align", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("Grid>#controltextarea", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("PopupMenu", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("TitleBarControl", "bordertype", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("3");
    this._addCss("Grid>#controltextarea", "linespace", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea", "linespace", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.readonly", "linespace", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.essential", "linespace", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 9");
    this._addCss("Grid>#controltextarea", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.readonly", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.essential", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("Grid>#controlcheckbox", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Radio.essential", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Grid>#controlcheckbox", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Radio.essential", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "daybackground", obj, ["normal", "mouseover", "pushed", "selected"]);
    this._addCss("Calendar.essential", "daybackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#controlcalendar", "dayborder", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayborder", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "dayborder", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "dayborder", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid>#controlcalendar", "daybordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "daybordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "daybordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["normal", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "daycolor", obj, ["normal", "mouseover", "pushed", "selected"]);
    this._addCss("Calendar.essential", "daycolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("8 Tahoma");
    this._addCss("Grid>#controlcalendar", "dayfont", obj, ["normal", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "dayfont", obj, ["normal", "mouseover", "pushed", "selected"]);
    this._addCss("Calendar.essential", "dayfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#controlcalendar", "daygradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "daygradation", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "daygradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("22 22");
    this._addCss("Grid>#controlcalendar", "daysize", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daysize", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "daysize", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "daysize", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("Grid>#controlcalendar", "popupalign", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "popupalign", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "popupalign", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar", "popupbackground", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "popupbackground", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "popupbackground", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "popupbackground", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#5b6473ff","");
    this._addCss("Grid>#controlcalendar", "popupborder", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "popupborder", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "popupborder", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid>#controlcalendar", "popupbordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "popupbordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "popupbordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "popupbordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#controlcalendar", "popupgradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "popupgradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "popupgradation", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "popupgradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("156 181");
    this._addCss("Grid>#controlcalendar", "popupsize", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "popupsize", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "popupsize", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_color("");
    this._addCss("Grid>#controlcalendar", "trailingdaycolor", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "trailingdaycolor", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "trailingdaycolor", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#controlcalendar", "usetrailingday", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "usetrailingday", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "usetrailingday", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#controlcalendar", "viewmonthspin", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "viewmonthspin", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "viewmonthspin", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#controlcalendar", "viewyearspin", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "viewyearspin", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "viewyearspin", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("#217fedff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["mouseover", "focused"]);
    this._addCss("Calendar.readonly", "daybackground", obj, ["focused"]);
    this._addCss("Calendar.essential", "daybackground", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["mouseover", "focused"]);
    this._addCss("Calendar.readonly", "daycolor", obj, ["focused"]);
    this._addCss("Calendar.essential", "daycolor", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_font("bold 8 Tahoma");
    this._addCss("Grid>#controlcalendar", "dayfont", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayfont", obj, ["mouseover", "focused"]);
    this._addCss("Calendar.readonly", "dayfont", obj, ["focused"]);
    this._addCss("Calendar.essential", "dayfont", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_background("#cae6f7ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_Calendar.png')");
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Calendar.essential>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_padding("1 2 0 0");
    this._addCss("Grid>#controlcalendar>#dropbutton", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_Calendar_D.png')");
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_Spinup.png')");
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Spin>#spinupbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Calendar.readonly>#spinupbutton", "image", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Spin.essential>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_Spinup_D.png')");
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Spin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_Spindown.png')");
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Spin>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Calendar.readonly>#spindownbutton", "image", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Spin.essential>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_Spindown_D.png')");
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Spin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#5b6473ff","");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("8 Tahoma");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "font", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("22 0 0 0");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "ncpadding", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("yyyy.MM");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerformat", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daycolor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybordertype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("25");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerheight", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headercolor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#2b3753ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerborder", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbordertype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("bold 10 Tahoma");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerfont", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodyborder", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybordertype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("일 월 화 수 목 금 토");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekformat", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekcolor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#2b3753ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekbackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("8 Dotum");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekfont", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaycolor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#fb635eff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todayborder", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybordertype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("bold 8 Tahoma");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todayfont", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayborder", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybordertype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("8 Tahoma");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayfont", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#5f9dde");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaycolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayborder", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybordertype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#ee6b67");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaycolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("8 Tahoma");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayfont", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "popupsize", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#bebebe");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "trailingdaycolor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "usetrailingday", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#217fedff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaycolor", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#217fedff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaycolor", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalPrev.png')");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalPrev_O.png')");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalPrev_D.png')");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalNext.png')");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalNext_O.png')");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalNext_D.png')");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "buttonalign", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "buttonalign", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);

    obj = new nexacro.Style_value("8");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);

    obj = new nexacro.Style_font("bold 10 Tahoma");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "font", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "font", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalSpinup.png')");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("center bottom");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalSpinup_O.png')");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalSpinup_D.png')");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalSpindown.png')");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("center top");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalSpindown_O.png')");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_CalSpindown_D.png')");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("GroupBox", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("GroupBox", "titlebackground", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("GroupBox", "titlegradation", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("GroupBox", "titleimage", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("GroupBox", "titleimagealign", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("GroupBox", "titleview", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Menu", "autohotkey", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("","img::img_WF_MenuBg.png","repeat-x","0","0","0","0","true");
    this._addCss("Menu", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Menu", "checkboximage", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupMenu", "checkboximage", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Menu", "expandimage", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupMenu", "expandimage", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_font("bold 10 Gulim");
    this._addCss("Menu", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("Menu", "itemalign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupMenu", "itemalign", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","img::img_WF_MenuBar.png","","0","0","100","50","true");
    this._addCss("Menu", "itembackground", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 25 0 25");
    this._addCss("Menu", "itempadding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_border("2","solid","#21367eff","");
    this._addCss("Menu", "popupborder", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Menu", "popupcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Menu", "popupfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","img::img_WF_MenuItem.png","","0","0","0","50","true");
    this._addCss("Menu", "popupitembackground", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#c6c6c6ff","","0","none","","");
    this._addCss("Menu", "popupitemborder", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Menu", "popupitembordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Menu", "popupitemgradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("27");
    this._addCss("Menu", "popupitemheight", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 11 0 29");
    this._addCss("Menu", "popupitempadding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Menu", "popuppadding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_color("#87eff8");
    this._addCss("Menu", "color", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_color("#2c4898");
    this._addCss("Menu", "popupcolor", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_font("bold 9 Gulim");
    this._addCss("Menu", "popupfont", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_border("1","dotted","#777777ff","");
    this._addCss("Menu", "itemborder", obj, ["focused"]);

    obj = new nexacro.Style_color("#5a280b66");
    this._addCss("Menu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Menu", "popupcolor", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#2c4898ff","");
    this._addCss("PopupMenu", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_Check.png')");
    this._addCss("PopupMenu", "checkboximage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_TabSpindown.png')");
    this._addCss("PopupMenu", "expandimage", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("PopupMenu", "itemalign", obj, ["normal"]);

    obj = new nexacro.Style_value("19");
    this._addCss("PopupMenu", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 8 0 8");
    this._addCss("PopupMenu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_value("normal");
    this._addCss("PopupMenu", "popuptype", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("PopupMenu", "background", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#2c4898ff","","","0","0","0","0","true");
    this._addCss("PopupMenu", "itembackground", obj, ["mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_border("");
    this._addCss("PopupMenu", "itemborder", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("PopupMenu", "itemheight", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("");
    this._addCss("PopupMenu", "itempadding", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Radio", "itempadding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Radio.essential", "itempadding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_color("#222222");
    this._addCss("PopupMenu", "color", obj, ["focused"]);

    obj = new nexacro.Style_border("1","solid","#bbbbbbff","");
    this._addCss("PopupMenu", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("PopupMenu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#23386aff","");
    this._addCss("Form.from_POP", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Form.from_POP", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_POP_Title", "bordertype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #7b829a 0,100 #656b81");
    this._addCss("Static.sta_POP_Title", "gradation", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","3","solid","#6496fcff","","0","none","","");
    this._addCss("Static.sta_POP_Title", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("Static.sta_POP_Title", "font", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 12");
    this._addCss("Static.sta_POP_Title", "padding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("@gradation");
    this._addCss("ProgressBar", "barcolor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("ProgressBarControl", "barcolor", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #57b2e5 0,100 #3ea3df");
    this._addCss("ProgressBar", "bargradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("ProgressBarControl", "bargradation", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("ProgressBar", "bartype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "bartype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#8e8e8eff","","1","solid","#e1e1e1ff","","1","solid","#e1e1e1ff","","1","solid","#8e8e8eff","");
    this._addCss("ProgressBar", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ProgressBarControl", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("forward");
    this._addCss("ProgressBar", "direction", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "direction", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("ProgressBar", "endimage", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "endimage", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("ProgressBar", "progressimage", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "progressimage", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("true");
    this._addCss("ProgressBar", "smooth", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "smooth", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("ProgressBar", "startimage", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "startimage", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#cfcfcf");
    this._addCss("ProgressBar", "barcolor", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "barcolor", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("ProgressBar", "bargradation", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "bargradation", obj, ["disabled"]);

    obj = new nexacro.Style_background("","img::img_WF_RadioBg.png","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Radio", "buttonborder", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("normal 0 0");
    this._addCss("Radio", "buttongradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Radio.essential", "buttongradation", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_Radio.png')");
    this._addCss("Radio", "buttonimage", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Radio", "itembackground", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Radio.essential", "itembackground", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 3");
    this._addCss("Radio", "textpadding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Radio.essential", "textpadding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","img::img_WF_RadioBg_O.png","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","img::img_WF_RadioBg_D.png","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["disabled"]);
    this._addCss("Radio.essential", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::img_WF_Radio_D.png')");
    this._addCss("Radio", "buttonimage", obj, ["disabled"]);
    this._addCss("Radio.essential", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_value("right");
    this._addCss("Spin", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.readonly", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Spin.essential", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("19");
    this._addCss("Spin", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.readonly", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Spin.essential", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#ccccccff","","0","none","","","0","none","","");
    this._addCss("Spin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinedit", "border", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("1 9 0 9");
    this._addCss("Spin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #e2e2e2");
    this._addCss("Spin>#spinupbutton", "gradation", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Spin>#spindownbutton", "gradation", obj, ["mouseover", "focused", "selected"]);
    this._addCss("SpinControl>#spinupbutton", "gradation", obj, ["mouseover", "selected", "focused"]);
    this._addCss("SpinControl>#spindownbutton", "gradation", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #e2e2e2 0,100 #ffffff");
    this._addCss("Spin>#spinupbutton", "gradation", obj, ["pushed"]);
    this._addCss("Spin>#spindownbutton", "gradation", obj, ["pushed"]);
    this._addCss("SpinControl>#spinupbutton", "gradation", obj, ["pushed"]);
    this._addCss("SpinControl>#spindownbutton", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#2c4898ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Tab", "border", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#dfdfdfff","","","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("1 solid #c1c1c1");
    this._addCss("Tab", "buttonborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("10 20 10 20");
    this._addCss("Tab", "buttonpadding", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_margin("0 -1 0 0");
    this._addCss("Tab", "buttonmargin", obj, ["normal"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Tab", "color", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_line("0","","","");
    this._addCss("Tab", "focusborder", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Tab", "showextrabutton", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab", "stepshowtype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl", "stepshowtype", obj, ["normal", "deactivate", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("1 solid #2c4898");
    this._addCss("Tab", "buttonborder", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_padding("10 0 10 0");
    this._addCss("Tab", "buttonpadding", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_font("bold 9 Gulim");
    this._addCss("Tab", "font", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_value("1 dotted #777777");
    this._addCss("Tab", "buttonborder", obj, ["focused"]);

    obj = new nexacro.Style_background("","img::tab_SelectLine.png","repeat-x","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["selected"]);

    obj = new nexacro.Style_value("50%");
    this._addCss("Tab", "opacity", obj, ["disabled"]);
    this._addCss("Tab>#spinupbutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab>#spindownbutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab>#extrabutton", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_TabSpinup.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_TabSpinup_O.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_TabSpinup_P.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_TabSpindown.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_TabSpindown_O.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_TabSpindown_P.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_TabExtra.png')");
    this._addCss("Tab>#extrabutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("");
    this._addCss("TitleBarControl", "border", obj, ["normal", "deactivate", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_TB_min.png')");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_TB_max.png')");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_TB_normal.png')");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('img::img_TB_close.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#f3f3f3ff","","","0","0","0","0","true");
    this._addCss("Calendar.readonly", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Edit.readonly", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "background", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#fcf7efff","","","0","0","0","0","true");
    this._addCss("Calendar.essential", "background", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Combo.essential", "background", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Combo.essential>#dropbutton", "background", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("Spin.essential", "background", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Spin.essential>#spinupbutton", "background", obj, ["pushed"]);
    this._addCss("Spin.essential>#spindownbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#eda649ff","");
    this._addCss("Calendar.essential", "border", obj, ["mouseover", "selected"]);
    this._addCss("Combo.essential", "border", obj, ["mouseover", "selected"]);
    this._addCss("Edit.essential", "border", obj, ["mouseover"]);
    this._addCss("MaskEdit.essential", "border", obj, ["mouseover"]);
    this._addCss("Spin.essential", "border", obj, ["mouseover", "pushed"]);
    this._addCss("TextArea.essential", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","img::img_WF_Essential.png","","0","0","0","0","true");
    this._addCss("Calendar.essential>#calendaredit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin.essential>#spinedit", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","img::img_WF_EssentialCheckBox.png","","0","0","0","0","true");
    this._addCss("CheckBox.essential", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('img::img_WF_EssentialCheck.png')");
    this._addCss("CheckBox.essential", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#fdfdfdff","img::img_WF_Essential.png","","0","0","0","0","true");
    this._addCss("Combo.essential>#comboedit", "background", obj, ["disabled"]);
    this._addCss("Edit.essential", "background", obj, ["disabled"]);
    this._addCss("MaskEdit.essential", "background", obj, ["disabled"]);
    this._addCss("Spin.essential>#spinedit", "background", obj, ["disabled"]);
    this._addCss("TextArea.essential", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#eda649ff","");
    this._addCss("Combo.essential>#dropbutton", "border", obj, ["mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('img::cmb_WF_EssentialDrop.png')");
    this._addCss("Combo.essential>#dropbutton", "image", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('img::cmb_WF_EssentialDrop_P.png')");
    this._addCss("Combo.essential>#dropbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("#ffffffff","img::img_WF_Essential.png","","0","0","0","0","true");
    this._addCss("Edit.essential", "background", obj, ["normal"]);
    this._addCss("MaskEdit.essential", "background", obj, ["normal"]);
    this._addCss("TextArea.essential", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#fcf7efff","img::img_WF_Essential.png","","0","0","0","0","true");
    this._addCss("Edit.essential", "background", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit.essential", "background", obj, ["mouseover", "focused"]);
    this._addCss("TextArea.essential", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","img::img_WF_EssentialRadioBg.png","","0","0","0","0","true");
    this._addCss("Radio.essential", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('img::img_WF_EssentialRadio.png')");
    this._addCss("Radio.essential", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#eda649ff","","0","none","","","0","none","","");
    this._addCss("Spin.essential>#spinedit", "border", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_EssentialSpinup_O.png')");
    this._addCss("Spin.essential>#spinupbutton", "image", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_EssentialSpinup_P.png')");
    this._addCss("Spin.essential>#spinupbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_EssentialSpindown_O.png')");
    this._addCss("Spin.essential>#spindownbutton", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('img::btn_WF_EssentialSpindown_P.png')");
    this._addCss("Spin.essential>#spindownbutton", "image", obj, ["pushed"]);

    obj = null;
    
//[add theme images]
  };
})();
