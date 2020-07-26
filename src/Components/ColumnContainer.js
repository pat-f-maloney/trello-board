import React, { useState } from 'react';
import { connect } from 'react-redux';
import Column from './Column';
import { addColumnAction } from "../Redux/actionCreators"

const ColumnContainer = (props) => {
    const { columns, addColumn } = props;
    const [input, setInput] = useState('');


    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); addColumn(input); setInput("") }}>
                <input onChange={(e) => setInput(e.target.value)} value={input} />
                <input type="submit" value="Add Column" />
            </form>
            {/* {columns.map(column => <Column column={column} />)} */}
        </>
    );
}

const mapStateToProps = (state) => ({
    columns: state.columns
});

const mapDispatchToProps = (dispatch) => ({
    addColumn: (payload) => dispatch(addColumnAction({ payload }))
})

export default connect(mapStateToProps, mapDispatchToProps)(ColumnContainer);