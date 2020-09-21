package nexacro.sample.web.com;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import java.io.File;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import nexacro.sample.service.com.CodeService;
import nexacro.sample.service.com.CommonService;
import nexacro.sample.vo.com.AddFileVO;
import nexacro.sample.vo.com.ComCodeVO;
import nexacro.sample.vo.com.DetailCodeVO;
import nexacro.sample.vo.com.RelSeqVO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.NexacroException;
import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.annotation.ParamVariable;
import com.nexacro.spring.data.NexacroResult;


@Controller
public class CommonController {
	
	@Resource(name = "commonService")
	private CommonService commonService;
	
	@Resource (name="codeService")
	CodeService codeService;
	
	// 코드마스터 전체내역 조회하기
	@RequestMapping(value = "common/selectCode.do")
	public NexacroResult selectCode(
			@ParamDataSet(name = "ds_search", required = false) ComCodeVO comCodeVO){
		
		List<ComCodeVO> comCodeList = codeService.selectCode(comCodeVO);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", comCodeList);
		
		return result;
	}
	
	// 분류별 코드번호 또는 코드네임 가져오기
	@RequestMapping(value = "common/detailCode.do")
	public NexacroResult detailCode(
			@ParamVariable(name = "codeSwitch") String codeSwitch){
		
		Map<String, String> switchMap = new HashMap<String, String>();
		switchMap.put("codeSwitch", codeSwitch);
		
		List<ComCodeVO> comCodeList = codeService.detailCode(switchMap);
				
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", comCodeList);
		
		return result;
	}
	
	// 코드마스터 입력, 수정, 삭제
	@RequestMapping(value = "common/editCode.do")
	public NexacroResult editCode(
			@ParamDataSet(name = "ds_input", required = false) List<ComCodeVO> comCodeVO) throws NexacroException{
		System.out.println("master : "+comCodeVO.get(0).getClassCode()   );
		String confirmStr = codeService.editCode(comCodeVO);
		
		NexacroResult result = new NexacroResult();
		result.addVariable("confirmStr", confirmStr);		
		return result;
	}
	
	// 상세코드 분류코드 가져오기
	@RequestMapping(value = "common/selectDetailCode.do")
	public NexacroResult selectDetailCode(){
		
		List<DetailCodeVO> detailCodeList = codeService.selectDetailCode();
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", detailCodeList);
		return result;
	}
	
	// 분류코드에 따른 상세코드 가져오기
	@RequestMapping(value = "common/selectDetailList.do")
	public NexacroResult selectDatailList(
			@ParamDataSet(name = "ds_search", required = false) DetailCodeVO detailCodeVO){
		
		List<DetailCodeVO> detailCodeList = codeService.selectDetailList(detailCodeVO);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", detailCodeList);
		
		return result;
	}
	
	// 상세코드 입력, 수정, 삭제
	@RequestMapping(value = "common/editDetailCode.do")
	public NexacroResult editDetailCode(
			@ParamDataSet(name = "ds_input", required = false) List<DetailCodeVO> detailCodeVO){
		
		String confirmStr = codeService.editDetailCode(detailCodeVO);
		
		NexacroResult result = new NexacroResult();
		result.addVariable("confirmStr", confirmStr);
		return result;
	}
	
	// 준비서면 첨부파일 조회
	@RequestMapping(value = "/common/getPreAddFile.do")
	public NexacroResult getPreAddFile(
			@ParamDataSet(name = "ds_input" , required = false) AddFileVO addFileVO) throws Exception{

		List<AddFileVO> edocFileList = commonService.getPreAddFile(addFileVO);

		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", edocFileList);
		
		return result;		
	}
		
	/**
	 * 2020.01.15 최광훈
	 * 파일 추가를 위한 컨트롤러 추가.
	 */
	// 서증 첨부파일 조회
	@RequestMapping(value = "/common/getEdocAddFile.do")
	public NexacroResult getEdocAddFile(
			//@ParamDataSet(name = "AddFileVO" , required = false) AddFileVO addFileVO,
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmno,
			@ParamVariable(name = "edocAdmSeq") String edocAdmSeq) throws Exception{
		
		NexacroResult result = new NexacroResult();
		AddFileVO addFileVO = new AddFileVO();
		try {
			addFileVO.setLawsuitAdmNo(lawsuitAdmno);
			addFileVO.setEdocAdmSeq(edocAdmSeq);
			//addFileVO.setAddFileAdmName("2013080814");
						
			List edocAddFileList = commonService.getEdocAddFile(addFileVO);
			if(edocAddFileList.size()>0){
				result.addDataSet("ds_output",edocAddFileList);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
		
	}
	
	// 준비서면 첨부파일 조회
	@RequestMapping(value = "/common/getAddFile.do")
	public NexacroResult getAddFile(
			@ParamDataSet(name = "ds_input" , required = false) AddFileVO addFileVO) throws Exception{

		List<AddFileVO> edocFileList = commonService.getAddFile(addFileVO);

		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_output", edocFileList);
	
		return result;		
	}
	
	@RequestMapping(value = "/common/fileUpload.do")
	public NexacroResult fileUpload (@ParamVariable(name = "lawsuit_adm_no") String lawsuitAdmno) throws Exception{
		return null;
		
	}
	
	// 첨부파일 등록 20.01.22 text
	@RequestMapping(value = "/common/insertFile.do")
	public NexacroResult insertFile(@ParamDataSet(name="ds_input") AddFileVO addFileVO,
									@ParamVariable(name="sPath") String sPath,
									HttpServletRequest request) throws Exception{
		
		NexacroResult result = new NexacroResult();
				
		try {
			//JKIM_2002.02.13 : getRealPath()까지 저장 불필요, sPath정보만 Form(View)에서 addFileVo에 저장함	
			//String serPath = request.getSession().getServletContext().getRealPath(sPath);
			//addFileVO.setAddFileSerPath(serPath+"\\");
			
			String newAddFileRelSeq = commonService.insertFile(addFileVO);
			String strConfirm = "SUCCESS";
			
			result.addVariable("strConfirm", strConfirm);
			result.addVariable("newAddFileRelSeq", newAddFileRelSeq);
			/*
			RelSeqVO vo = new RelSeqVO();
			vo.setAddFileRelSeq(newAddFileRelSeq);
			List<RelSeqVO> voList = (List<RelSeqVO>) new RelSeqVO();
			voList.add(vo);
			result.addDataSet("ds_output", voList);
			*/
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}		

	// 준비서면 첨부파일 조회
	@RequestMapping(value = "/common/insertFilePre.do")
	public NexacroResult insertFilePre(
			@ParamDataSet(name = "ds_input" , required = false) AddFileVO addFileVO) throws Exception{

		commonService.insertFilePre(addFileVO);

		NexacroResult result = new NexacroResult();		
		return result;		
	}
			
	// 서증 첨부파일 등록
	@RequestMapping(value = "/common/insertFileEdoc.do")
	public NexacroResult insertFileEdoc(
			@ParamDataSet(name = "ds_input" , required = false) AddFileVO addFileVO,
			@ParamVariable(name = "newAddFileRelSeq") String newAddFileRelSeq,
			@ParamVariable(name = "lawsuitAdmNo") String lawsuitAdmNo,
			@ParamVariable(name = "edocAdmSeq") String edocAdmSeq) throws Exception{
		
		NexacroResult result = new NexacroResult();
		try {
			
			List edocAddFileList = commonService.getEdocAddFile(addFileVO);
			if(edocAddFileList.size()>0){
				result.addDataSet("ds_output",edocAddFileList);
			}
			
			addFileVO.setAddFileRelSeq(newAddFileRelSeq);
			addFileVO.setLawsuitAdmNo(lawsuitAdmNo);
			addFileVO.setEdocAdmSeq(edocAdmSeq);
			
			commonService.insertFileEdoc(addFileVO);
			
			String strConfirm = "INSERT";
				
			result.addVariable("strConfirm", strConfirm);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
	
	// 준비서면 , 서증 파일 삭제
	@RequestMapping(value = "/common/deleteFile.do")
	public NexacroResult deleteFile(@ParamVariable(name = "add_file_rel_seq") String addFileRelSeq,
									@ParamVariable(name = "lawsuit_adm_no") String lawsuitAdmNo,
									@ParamVariable(name = "inst_adm_Code") String instAdmCode,
									@ParamVariable(name = "pre_iwr_no") String preIwrNo,
									@ParamVariable(name = "edoc_adm_seq") String edocAdmSeq,
									@ParamVariable(name = "checkVal") String checkVal) throws Exception{
		
		NexacroResult result = new NexacroResult();
		
		try {
			AddFileVO addFileVO = new AddFileVO();
			addFileVO.setAddFileRelSeq(addFileRelSeq);
			addFileVO.setLawsuitAdmNo(lawsuitAdmNo);
			addFileVO.setInstAdmCode(instAdmCode);
			addFileVO.setPreIwrNo(preIwrNo);
			addFileVO.setEdocAdmSeq(edocAdmSeq);
			
			if(checkVal.equals("009")){ // JKIM_2020.02.14 : add checkVal (null check X)
				commonService.deleteFileEdoc(addFileVO);
			}else{
				commonService.deleteFilePre(addFileVO);
			}
			result.addVariable("strMSG", "SUCCESS");
	
		} catch (Exception e) {
			e.printStackTrace();
			result.addVariable("strMSG", "FAIL");
		}
		
		return result;
	}	
		
	// 파일사이즈
	@RequestMapping(value = "/common/getFileSize.do")
	public NexacroResult getFileSize(@ParamVariable(name="sFileName") String sFileName
			) throws Exception{
		
		NexacroResult result = new NexacroResult();
				
		try {
			File pcFile = new File(sFileName);
			
			if(pcFile.exists()) {
				
				result.addVariable("gFileSize", pcFile.length());
			} 
	
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	// JKIM_2020.01.14 : Sample Code로 단순 참조용입니다.
	@RequestMapping(value = "/common/deleteSerFile.do")
	public NexacroResult deleteSerFile(@ParamVariable(name="sPath") String sPath,
			@ParamVariable(name = "serverFileName") String serverFileName,
			HttpServletRequest request) throws Exception{
		
		NexacroResult result = new NexacroResult();
		String sMsg = "SUCCESS";
				
		try {
			String serverPath = request.getSession().getServletContext().getRealPath(sPath);
			File serverFile = new File(serverPath +"\\"+ serverFileName);
			
			if(serverFile.exists()) {		
				serverFile.delete();
			}	
	
		} catch (Exception e) {
			e.printStackTrace();
			sMsg = "ERROR: DELETE SERVER FILE";
		}
		result.addVariable("sMsg", sMsg);	
		return result;
	}
	
}
