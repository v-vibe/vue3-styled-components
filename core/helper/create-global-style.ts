import type { ExpressionType } from '@/utils'
import { defineComponent, DefineSetupFnComponent, h } from 'vue'
import { generateComponentName, insertExpressions } from '@/utils'
import { injectStyle } from '@/utils/injectStyle'

export const createGlobalStyle = (styles: TemplateStringsArray, ...expressions: ExpressionType[]): DefineSetupFnComponent<any> => {
  return defineComponent(
    (_, { attrs }) => {
      const cssStringsWithExpression = insertExpressions(styles, expressions)
      injectStyle('global', cssStringsWithExpression, attrs)
      return () => {
        return h('div', { style: 'display: none' })
      }
    },
    {
      name: generateComponentName('global'),
      inheritAttrs: true,
    },
  )
}
