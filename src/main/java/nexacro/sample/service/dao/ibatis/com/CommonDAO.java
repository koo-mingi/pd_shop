package nexacro.sample.service.dao.ibatis.com;

//pd_law

import java.util.List;

import nexacro.sample.vo.com.AddFileVO;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;


@Repository("commonDAO")
public class CommonDAO extends EgovAbstractDAO{

	public void insertFilePre(AddFileVO addFileVO) {
		insert("common.insertFilePre",addFileVO);
	}
	
	public List getAddFile(AddFileVO addFileVO) {
		return list("common.getAddFile",addFileVO);
	}
	
	// 준비서면 일련번호 조회
	public List getPreAddFile(AddFileVO addFileVO) {
		return list("common.getPreAddFile",addFileVO);
	}
	
	// 서증 일련번호 조회
	public List getEdocAddFile(AddFileVO addFileVO) {
		return list("common.getEdocAddFile",addFileVO);
	}
	
	
	// 첨부파일 등록
	public void insertFile(AddFileVO addFileVO){
		insert("common.insertFile",addFileVO);
	}
		
	// 서증 첨부파일 등록
	public void insertFileEdoc(AddFileVO addFileVO) {
		insert("common.insertFileEdoc", addFileVO);
	}

	// 첨부파일 목록에서 삭제
	public void deleteFilePre(AddFileVO addFileVO) {
		// TODO Auto-generated method stub
		update("common.deleteFilePre",addFileVO);
	}
	
	// 첨부파일 목록에서 삭제
	public void deleteFileEdoc(AddFileVO addFileVO) {
		// TODO Auto-generated method stub
		update("common.deleteFileEdoc",addFileVO);
	}
}