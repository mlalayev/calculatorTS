import { Button, Grid, styled } from '@mui/material'

interface GridOperationButtonProps {
    operation: string;
    selectOperation: (operation: string) => void;
    selectedOperation: string;
}

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
    color: "black",
    fontWeight:"600",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "gray",
    borderColor: props.selected ? "#fff" : "rgb(254, 241, 73, 0.5)",
     '&:hover': {
    backgroundColor: "darkgray"}
}))

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
    operation,
    selectOperation,
    selectedOperation
}) => {
    return (
        <Grid item xs={3}>
            <StyledButton
                fullWidth
                variant="outlined"
                onClick={() => selectOperation(operation)}
                selected={selectedOperation === operation}
            >
                {operation}
            </StyledButton>
        </Grid>
    )
}