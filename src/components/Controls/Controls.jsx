import PropTypes from 'prop-types';

function Controls({ current, total, onChange }) {
    return (
        <section>
            <button 
                type="button" 
                disabled={current === 0} 
                onClick={() => onChange(-1)}
            >
                Назад
            </button>
            <button 
                type="button" 
                disabled={current === total - 1} 
                onClick={() => onChange(1)}
            >
                Вперед
            </button>
        </section>
    );
};

Controls.propTypes = {
    current:  PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Controls;