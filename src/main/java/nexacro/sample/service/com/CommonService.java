package nexacro.sample.service.com;

import java.util.List;

import nexacro.sample.vo.com.AddFileVO;


/**
 * 2020.01.15 최광훈
 * 
 *
 */
public interface CommonService {
	
	public void insertFilePre(AddFileVO addFileVO) throws Exception;
	
	public List getAddFile(AddFileVO addFileVO) throws Exception;
	
	// 서증 첨부파일 조회
	public List getPreAddFile(AddFileVO addFileVO) throws Exception;

	// 서증 첨부파일 조회
	public List getEdocAddFile(AddFileVO addFileVO) throws Exception;

	//청부파일 등록
	public String insertFile(AddFileVO addFileVO) throws Exception;
	
	//서증 첨부파일 등록
	public void insertFileEdoc(AddFileVO addFileVO) throws Exception;
	
	// 파일 목록에서 삭제
	public void deleteFileEdoc(AddFileVO addFileVO) throws Exception ;
	
	// 파일 목록에서 삭제
	public void deleteFilePre(AddFileVO addFileVO) throws Exception ;
	
}
