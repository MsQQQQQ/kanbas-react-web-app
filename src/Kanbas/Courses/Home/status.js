import { Button, Icon, Header, Item, Label } from 'semantic-ui-react'
import "./index.css"

function Status() {
    return (
        <div className='d-flex flex-column'>
            <div className='status'>
                <Button>
                    <Icon name='upload' />
                    Import Existing Content
                </Button>
                <Button>
                    <Icon name='creative commons' />
                    Import from Commons
                </Button>
                <Button>
                    <Icon name='target' />
                    Choose Home Page
                </Button>
                <Button>
                    <Icon name='chart bar' />
                    View Course Stream
                </Button>
                <Button>
                    <Icon name='announcement' />
                    New Announcement
                </Button>
                <Button>
                    <Icon name='chart bar' />
                    New Analytics
                </Button>
                <Button>
                    <Icon name='bell outline' />
                    View Course Notifications
                </Button>
            </div>
            <div className='mt-4 todo'>
                <Header as='h4' dividing>
                    To Do
                </Header>
                <Item.Group>
                    <Item>
                        <div className='me-3'>
                            <Label circular color="red">
                                2
                            </Label>
                        </div>
                        <Item.Content>
                            <Item.Header>Garde A1 - ENV + HTML</Item.Header>
                            <Item.Meta>100 points</Item.Meta>
                        </Item.Content>
                    </Item>
                    <Item>
                        <div className='me-3'>
                            <Label circular color="red">
                                2
                            </Label>
                        </div>
                        <Item.Content>
                            <Item.Header>Garde A1 - ENV + HTML</Item.Header>
                            <Item.Meta>100 points</Item.Meta>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </div>
        </div>
    );
}
export default Status;