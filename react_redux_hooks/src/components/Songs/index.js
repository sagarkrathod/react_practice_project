import React from 'react'

const Songs = () => {
    return(
        <div>
            <SongsContext.consumer>
                {({ songs })=>{
                    <div>
                        {songs}
                    </div>
                }}
            </SongsContext.consumer>    
        </div>
    )
}

export default Songs;

