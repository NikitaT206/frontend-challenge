import * as catsActions from './cats'
import * as favoriteCatsActions from './favoriteCats'

export const actions = {
  ...catsActions,
  ...favoriteCatsActions
}