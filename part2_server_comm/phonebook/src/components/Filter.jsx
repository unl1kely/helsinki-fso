
const Filter = (props) => <div>
  filter shown with
  <input value={props.userFilter} onChange={e => props.setUserFilter(e.target.value)} />
</div>

export default Filter