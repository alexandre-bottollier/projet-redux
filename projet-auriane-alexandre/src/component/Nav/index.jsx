import {NavLink} from 'react-router-dom';

const navStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: '20px',
}

const buttonsStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px'
}

function Nav() {
    const style = ({ isActive }) => {
        return {
            color: isActive ? '#959afb' : '#FFF',
        }
    }

    return (
        <nav style={navStyle}>
            <div><h1>Task List</h1></div>
            <div style={buttonsStyle}>
                <button>
                    <NavLink to={'/'} end style={style}>
                        Add a task
                    </NavLink>
                </button>
                <button>
                    <NavLink to={'/list'} style={style}>
                        Tasks list
                    </NavLink>
                </button>
            </div>
        </nav>
    )
}
export default Nav