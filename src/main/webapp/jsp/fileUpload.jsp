<%@ page contentType="text/html;charset=utf-8" %>
<%@ page language="java"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.List"%>

<%@ page import="javax.servlet.ServletException"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>

<%@ page import= "com.oreilly.servlet.MultipartRequest" %>
<%@ page import= "com.oreilly.servlet.multipart.DefaultFileRenamePolicy" %>

<%@ page import="com.nexacro.xapi.data.ColumnHeader"%>
<%@ page import="com.nexacro.xapi.data.DataSet"%>
<%@ page import="com.nexacro.xapi.data.DataTypes"%>
<%@ page import="com.nexacro.xapi.data.PlatformData"%>
<%@ page import="com.nexacro.xapi.data.VariableList"%>
<%@ page import="com.nexacro.xapi.tx.HttpPlatformResponse"%>
<%@ page import="com.nexacro.xapi.tx.PlatformException"%>


<%
String chkType = request.getHeader("Content-Type");
//System.out.println(chkType);

if( chkType == null )
    return;

request.setCharacterEncoding("UTF-8");

String PATH = new String((request.getParameter("PATH")).getBytes("iso8859-1"), "utf-8");
String addFileSerFileName = new String((request.getParameter("addFileSerFileName")).getBytes("iso8859-1"), "utf-8");
addFileSerFileName = addFileSerFileName.replace(" ", "");

String savePath = request.getSession().getServletContext().getRealPath(PATH);


System.out.println("+++ savePath: " + savePath);

File targetDir = new File(savePath);  

// 디렉토리가 없을 경우 생성
if(!targetDir.exists()) {
 targetDir.mkdirs();
}

int maxSize = 500 * 1024 * 1024; // 최대 업로드 파일 크기 500MB(메가)로 제한

PlatformData resData = new PlatformData();
VariableList resVarList = resData.getVariableList();
String sMsg = " A ";


try {
	
    MultipartRequest multi = new MultipartRequest(request, savePath, maxSize, "UTF-8", new DefaultFileRenamePolicy()); //파일 업로드
    //MultipartRequest multi = new MultipartRequest(request, savePath, maxSize, "euc-kr", new DefaultFileRenamePolicy()); //파일 업로드
    Enumeration files = multi.getFileNames(); // 파일명 모두 얻기

    sMsg += "B ";
    DataSet ds = new DataSet("Dataset00");
    
    ds.addColumn(new ColumnHeader("fileName", DataTypes.STRING));
    ds.addColumn(new ColumnHeader("fileSize", DataTypes.LONG));
    ds.addColumn(new ColumnHeader("fileType", DataTypes.STRING));
     
    sMsg += "C ";

    String fileName="";
    
    System.out.println("+++ hasMoreElements: " + files.hasMoreElements());

    while (files.hasMoreElements()) {
    	
        sMsg += "D ";
        
        String name = (String)files.nextElement();
        fileName += multi.getFilesystemName(name);
        String type = multi.getContentType(name);
        
        File f = multi.getFile(name);
        System.out.println("+++ fileName: "+fileName);
        
        //200123 file rename-----------------------------------------------
        File newFile = new File (savePath +"\\"+ addFileSerFileName);
        
        if (f.renameTo(newFile)) {
        	System.out.println("File Renaming SUCCESS :: " + addFileSerFileName);
        } else {
        	System.out.println("File Renaming FAIL");
        }
        
      //-------------------------------------------------------------------
        
        int row = ds.newRow();
        ds.set(row, "fileName", fileName);
        ds.set(row, "fileType", type);
        
        if (newFile != null)
        {
            ds.set(row, "fileSize", newFile.length());
        }       
        sMsg += row+1 +"개 파일 ";
        System.out.println("+++ fileSize: "+newFile.length()/1024+"KB, fileType: "+type);
    }
    
    resData.addDataSet(ds);
    resVarList.add("ErrorCode", 200);
    resVarList.add("ErrorMsg", fileName);
    

} catch (Exception e) {
	
	sMsg += "Error! ";
	
    resVarList.add("ErrorCode", 500);
    resVarList.add("ErrorMsg", sMsg + " " + e);
}

HttpPlatformResponse res = new HttpPlatformResponse(response);
System.out.println("+++ res: "+res);
System.out.println("+++ sMsg: "+sMsg);
res.setData(resData);
res.sendData();

%>
