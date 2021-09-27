import { Fragment } from 'react';
import NextLink from 'next/link';
import {
	chakra,
	Box,
	Button,
	Divider,
	Heading,
	Text,
	VStack,
} from '@chakra-ui/react';
import { format, formatDistance } from 'date-fns';
import capitalize from 'lodash.capitalize';
import DefaultLayout from '../layouts/Default';

export default function Main(props) {
	const { changelogs, profile } = props;

	return (
		<DefaultLayout>
			<VStack py={8} w='full' spacing={8}>
				<Box w='full' mb={4}>
					<NextLink href='/dashboard/new'>
						<Button px={8} py={6} colorScheme='brand'>
							Add Update
						</Button>
					</NextLink>
				</Box>
				<VStack w='full' spacing={5}>
					{changelogs.map((changelog) => {
						return (
							<Fragment key={changelog.id}>
								<Box w='full' mb={4}>
									<Heading as='h2' mb={4}>
										{changelog.title}
									</Heading>
									<chakra.div
										d='flex'
										alignItems='center'
										justifyContent='start'
										mb={8}
										w='full'
									>
										<Text color='brand.200'>
											<NextLink
												href={`/dashboard/edit?id=${changelog.id}`}
											>
												Edit
											</NextLink>
										</Text>
										&nbsp;&nbsp;&middot;&nbsp;&nbsp;
										<Text fontSize='sm'>
											{capitalize(changelog.status)}
										</Text>
										&nbsp;&nbsp;&middot;&nbsp;&nbsp;
										<Text fontSize='sm'>
											{profile?.name}
										</Text>
										&nbsp;&nbsp;&middot;&nbsp;&nbsp;
										<Text
											fontSize='sm'
											title={format(
												new Date(changelog.updated_at),
												'PPPpp'
											)}
										>
											{formatDistance(
												new Date(changelog.updated_at),
												new Date(),
												{ addSuffix: true }
											)}
										</Text>
									</chakra.div>
									<chakra.div
										className='herald'
										fontSize='lg'
										lineHeight='tall'
										dangerouslySetInnerHTML={{
											__html: changelog.content,
										}}
									/>
								</Box>
								<Divider mb={4} />
							</Fragment>
						);
					})}
				</VStack>
			</VStack>
		</DefaultLayout>
	);
}
