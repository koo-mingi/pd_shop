package nexacro.sample.service.dao.ibatis.out.web.outlegal.total;

import java.util.List;

import nexacro.sample.vo.out.web.outlegal.total.OutLegalWebVo;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;


@Repository("outEdocAdmWebDAO")
public class OutEdocAdmWebDAO extends EgovAbstractDAO{
	
	//소송정보
	@SuppressWarnings("unchecked")
	public List getLawsuitInfo(OutLegalWebVo outVO) {
		return list("outwebSQL.outEdocAdmWeb.getLawsuitInfo",outVO);
	}
	
	//갑호증목록
	@SuppressWarnings("unchecked")
	public List getEdocAdmList1(OutLegalWebVo outVO) {
		return list("outwebSQL.outEdocAdmWeb.getEdocAdmList1",outVO);
	}
	//을호증목록
	@SuppressWarnings("unchecked")
	public List getEdocAdmList2(OutLegalWebVo outVO) {
		return list("outwebSQL.outEdocAdmWeb.getEdocAdmList2",outVO);
	}
	//서증관리 상세내역(ajax)
	public OutLegalWebVo getEdocAdmDetailList(OutLegalWebVo outVO) {
		return (OutLegalWebVo) getSqlMapClientTemplate().queryForObject("outEdocAdmWeb.getEdocAdmDetailList",outVO);
	}
		
	//첨부파일 조회
	@SuppressWarnings("unchecked")
	public List getAddFileList(OutLegalWebVo outVO) {
		return list("outwebSQL.outEdocAdmWeb.getAddFile",outVO);
	}
	
	//서증관리 입력
	public int edocAdmInsert(OutLegalWebVo outVO) {
		int result = 0;
		try {
			insert("outwebSQL.outEdocAdmWeb.edocAdmInsert",outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}
		return result;	
	}
	
	//서증관리 수정
	public int edocAdmUpdate(OutLegalWebVo outVO) {
		int result = 0;
		try {
			insert("outwebSQL.outEdocAdmWeb.edocAdmUpdate",outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}
		return result;	
	}
	
	//서증관리 삭제
	public int edocAdmDelete(OutLegalWebVo outVO) {
		int result = 0;
		try {
			insert("outwebSQL.outEdocAdmWeb.edocAdmDelete",outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}
		return result;	
	}
		
	// 소송관리번호 검색
	 public List getLawNoSearch(OutLegalWebVo outVO) throws Exception {
	    return list("outwebSQL.outEdocAdmWeb.getLawNoSearch", outVO);
	 }
	 
	//첨부파일 count
	public int getTotalCount(OutLegalWebVo outVO) {
		
		return  (Integer) getSqlMapClientTemplate().queryForObject(
				"outwebSQL.outEdocAdmWeb.totalCount", outVO);
	}
	// count
	public int getTotalCount1(OutLegalWebVo outVO) {
		
		return  (Integer) getSqlMapClientTemplate().queryForObject(
				"outwebSQL.outEdocAdmWeb.totalCount1", outVO);
	}
	// count
	public int getTotalCount2(OutLegalWebVo outVO) {
		
		return  (Integer) getSqlMapClientTemplate().queryForObject(
				"outwebSQL.outEdocAdmWeb.totalCount2", outVO);
	}
	// 게시글(파일O)등록
	public int getFileWrite(OutLegalWebVo outVO) {
		int result = 0;
		try {
			System.out.println(outVO);
			insert("outwebSQL.outEdocAdmWeb.getFileWrite", outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}

		return result;
	}
	// 게시글(파일O)등록
	public int insertFileEdoc(OutLegalWebVo outVO) {
		int result = 0;
		try {
			System.out.println(outVO);
			insert("outwebSQL.outEdocAdmWeb.insertFileEdoc", outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}

		return result;
	}
	
	//서증관리 파일삭제
	public int deleteEdocFile(OutLegalWebVo outVO) {
		int result = 0;
		try {
			update("outwebSQL.outEdocAdmWeb.deleteEdocFile", outVO);
			result = 1;
		} catch (Exception e) {
			System.out.println(e);
			return result = 3;
		}
		return result;	
	}
}