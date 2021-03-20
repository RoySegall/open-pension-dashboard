import "./TextWithActions.scss"

export default ({children, actions}) => <div className="text-with-actions">
  <span>{children}</span>
  actions
</div>
