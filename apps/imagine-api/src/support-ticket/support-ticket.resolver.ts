import {In} from 'typeorm';
import {Args, Query, Resolver} from '@nestjs/graphql';
import {HasScope} from '../session/has-scope.decorator';
import {SupportTicketModel} from './support-ticket.model';
import {SupportTicketRepository} from '../database/support-ticket.repository';
import {
  SupportTicketFilterManyInput,
  SupportTicketFilterOneInput,
} from './support-ticket.input';

@Resolver(() => SupportTicketModel)
export class SupportTicketResolver {
  constructor(private readonly supportTicketRepo: SupportTicketRepository) {}

  @Query(() => [SupportTicketModel])
  @HasScope('manageSupportTickets')
  async supportTickets(
    @Args('filter', {type: () => SupportTicketFilterManyInput})
    filter: SupportTicketFilterManyInput
  ): Promise<SupportTicketModel[]> {
    const matchingSupports = await this.supportTicketRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        senderID: filter.reportingUserIDs && In(filter.reportingUserIDs),
        reportedID: filter.offendingUserIDs && In(filter.offendingUserIDs),
        modID: filter.staffUserIDs && In(filter.staffUserIDs),
      },
      take: filter.limit,
    });
    return matchingSupports.map(SupportTicketModel.fromEntity);
  }

  @Query(() => SupportTicketModel)
  @HasScope('manageSupportTickets')
  async supportTicket(
    @Args('filter', {type: () => SupportTicketFilterOneInput})
    filter: SupportTicketFilterOneInput
  ): Promise<SupportTicketModel> {
    const matchingSupportTicket = await this.supportTicketRepo.findOneOrFail({
      id: filter.id,
    });
    return SupportTicketModel.fromEntity(matchingSupportTicket);
  }
}
