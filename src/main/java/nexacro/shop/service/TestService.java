package nexacro.shop.service;

import java.util.List;
import java.util.Map;

import nexacro.shop.vo.PersonVO;
import nexacro.shop.vo.UnitVO;

/**
 * Test를 위한 Servlce Sample Intreface
 * 
 * @author Park SeongMin
 * @since 08.12.2015
 * @version 1.0
 * @see
 */
public interface TestService {

    /**
     * Sample Service selectPerson Method
     * 
     * @return
     */
    PersonVO selectPerson(PersonVO personVO) throws Exception;
    
    List<UnitVO> selectUnit() throws Exception;
    
    List<Map> selectUnitMap(Map map) throws Exception;

    /**
     * Statements
     *
     * @return
     */
    List<Map> selectUnitResultClass();

    /**
     * Statements
     *
     * @return
     */
    List<Map> selectUnitMapAndResultMap();

}
