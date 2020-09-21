package nexacro.sample.service.impl.com;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.com.CodeService;
import nexacro.sample.service.dao.ibatis.com.CodeDAO;
import nexacro.sample.vo.com.ComCodeVO;
import nexacro.sample.vo.com.DetailCodeVO;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


@Service("codeService")
public class CodeServiceImpl extends EgovAbstractServiceImpl implements CodeService {

	@Resource(name="codeDAO")
	private CodeDAO codeDAO;
	
	// 코드마스터 전체내역 조회하기
	@Override
	public List<ComCodeVO> selectCode(ComCodeVO comCodeVO) {
		return codeDAO.selectCode(comCodeVO);
	}

	// 분류별 코드번호 또는 코드네임 가져오기
	@Override
	public List<ComCodeVO> detailCode(Map<String, String> switchMap) {
		return codeDAO.detailCode(switchMap);
	}

	// 코드마스터 입력/수정/삭제
	@Override
	public String editCode(List<ComCodeVO> comCodeVO) {
		
		String confirm = null;
		
		for(int i = 0; i < comCodeVO.size(); i++){
			ComCodeVO comCode = comCodeVO.get(i);
			
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) comCode;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				codeDAO.insertCode(comCode);
				confirm = "저장";
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				codeDAO.updateCode(comCode);
				confirm = "수정";
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
				codeDAO.deleteCode(comCode);
			}
		}
		
		return confirm;
	}

	// 상세코드 분류코드 가져오기
	@Override
	public List<DetailCodeVO> selectDetailCode() {
		return codeDAO.selectDetailCode();
	}

	// 분류코드에 따른 상세코드 가져오기
	@Override
	public List<DetailCodeVO> selectDetailList(DetailCodeVO detailCodeVO) {
		return codeDAO.selectDetailList(detailCodeVO);
	}
	
	// 상세코드 입력, 수정, 삭제
	@Override
	public String editDetailCode(List<DetailCodeVO> detailCodeVO) {
		
		String confirm = null;
		
		for(int i = 0; i < detailCodeVO.size(); i++){
			DetailCodeVO detailCode = detailCodeVO.get(i);
			
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) detailCode;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				codeDAO.insertDetailCode(detailCode);
				confirm = "저장";
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				Map<String, Object> detailCodeMap = new HashMap<String, Object>();
				detailCodeMap.put("detailCodeVO", detailCode);
				codeDAO.updateDetailCode(detailCodeMap);
				detailCodeMap.clear();
				confirm = "수정";
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
				codeDAO.deleteDetailCode(detailCode);
			}
			
		}
		
		return confirm;
	}
	
}
