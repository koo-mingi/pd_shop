package nexacro.sample.service.impl.com;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.com.CommonService;
import nexacro.sample.service.dao.ibatis.com.CommonDAO;
import nexacro.sample.vo.com.AddFileVO;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;
import egovframework.rte.psl.dataaccess.util.EgovMap;

@Service("commonService")
public class CommonServiceImpl extends AbstractServiceImpl implements CommonService{
	
	@Resource(name = "commonDAO")
	private CommonDAO commonDAO;

	@Override
	public void insertFilePre(AddFileVO addFileVO) throws Exception {
		commonDAO.insertFilePre(addFileVO);
	}
	
	@Override
	public List getAddFile(AddFileVO addFileVO) throws Exception {
		return commonDAO.getAddFile(addFileVO);
	}
	
	@Override
	public List getPreAddFile(AddFileVO addFileVO) throws Exception {
		return commonDAO.getPreAddFile(addFileVO);
	}
	
	@Override
	public List getEdocAddFile(AddFileVO addFileVO) throws Exception {
		return commonDAO.getEdocAddFile(addFileVO);
	}
	
	// 첨부파일 등록
	@Override
	public String insertFile(AddFileVO addFileVO) throws Exception {
		commonDAO.insertFile(addFileVO);
		return addFileVO.getAddFileRelSeq();
	}
	
	//서증 첨부파일 내역 등록
	@Override
	public void insertFileEdoc(AddFileVO addFileVO) throws Exception {
		commonDAO.insertFileEdoc(addFileVO);
	}

	// 첨푸파일 목록에서 삭제
	@Override
	public void deleteFileEdoc(AddFileVO addFileVO) throws Exception {
		commonDAO.deleteFileEdoc(addFileVO);
	}
	
	// 첨푸파일 목록에서 삭제
	@Override
	public void deleteFilePre(AddFileVO addFileVO) throws Exception {
		commonDAO.deleteFilePre(addFileVO);
	}
}
