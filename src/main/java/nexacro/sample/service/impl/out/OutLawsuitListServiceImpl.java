package nexacro.sample.service.impl.out;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.out.OutLawsuitListDao;
import nexacro.sample.service.out.OutLawsuitListService;
import nexacro.sample.vo.out.Law_fix_InfoVO;
import nexacro.sample.vo.out.OutLawNoSearchVO;
import nexacro.sample.vo.out.fixInfoInstanceVO;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("outlawsuitlistservice")
public class OutLawsuitListServiceImpl extends EgovAbstractServiceImpl implements OutLawsuitListService {
	
	@Resource(name="outlawsuitlistDao")
	private OutLawsuitListDao outlawsuitlistDao;
	
	//소송 리스트 조회
	@Override
	public List<OutLawNoSearchVO> selectLawsuitList(Map<String, Object> ListMap) {
		return outlawsuitlistDao.selectLawsuitList(ListMap);
	}

	//소송 상세정보 조회
	@Override
	public List<Law_fix_InfoVO> getLawsuitRecSelect(Law_fix_InfoVO searchVo) {
		return outlawsuitlistDao.getLawsuitRecSelect(searchVo);
	}
	
	//소송기본사항 조회
	@Override
	public	List<fixInfoInstanceVO> getInstanceList(fixInfoInstanceVO searchVo){
		return outlawsuitlistDao.getInstanceList(searchVo);
	}

	//소송 기일정보 조회
	@Override
	public List<Law_fix_InfoVO> getLawFixinfoSelect(Law_fix_InfoVO searchVo) {
		return outlawsuitlistDao.getLawFixinfoSelect(searchVo);
	}

	//소송 기정정보 insert, update, delete
	@Override
	public void getLawFixinfoCud(List<Law_fix_InfoVO> searchVo) {
		
		int size = searchVo.size();
		
		for(int i=0; i<size; i++){
			Law_fix_InfoVO law_fixinfoVo = searchVo.get(i);
			
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) law_fixinfoVo;
			law_fixinfoVo.setLawFixinfoDate(law_fixinfoVo.getLawFixinfoDate().substring(0, 11));
			law_fixinfoVo.setLawFixinfoDlinDate(law_fixinfoVo.getLawFixinfoDlinDate().substring(0, 11));
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				outlawsuitlistDao.insertFixinfo(law_fixinfoVo);
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				outlawsuitlistDao.updateFixinfo(law_fixinfoVo);
			}else if(accessor.getRowType() ==DataSet.ROW_TYPE_DELETED){
				outlawsuitlistDao.deleteFixinfo(law_fixinfoVo);
			}
		}
	}
	
	//소송 기정정보 insert, update, delete
	@Override
	public void getLawFixinfoCud2(List<Law_fix_InfoVO> searchVo) {
		
		int size = searchVo.size();
		
		for(int i=0; i<size; i++){
			Law_fix_InfoVO law_fixinfoVo = searchVo.get(i);
			
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) law_fixinfoVo;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				outlawsuitlistDao.insertFixinfo2(law_fixinfoVo);
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				outlawsuitlistDao.updateFixinfo(law_fixinfoVo);
			}else if(accessor.getRowType() ==DataSet.ROW_TYPE_DELETED){
				outlawsuitlistDao.deleteFixinfo(law_fixinfoVo);
			}
		}
	}
}
