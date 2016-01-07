// import ajax from '../../utility/ajax'
import qs from 'qs'

export const SCHOOL_SEARCH = 'SCHOOL_SEARCH'

export function searchSchools (conditions) {

  const query = qs.stringify(conditions)

  return {
    type: SCHOOL_SEARCH,
    data: [
      {name:'Tsinghua Univesity(China)'},
      {name:'000002'},
      {name:'000001'},
      {name:'000001'},
      {name:'000001'},
    ]
  }
}
